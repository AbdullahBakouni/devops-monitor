import {
  Injectable,
  Logger,
  OnModuleInit,
  OnModuleDestroy,
  Inject,
} from '@nestjs/common';
import Docker from 'dockerode';
import { DatabaseService } from '@app/database';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from '@app/common/pubsub/pubsub.provider';
import { KafkaLogger } from '@app/common/logging/kafka-logger.service';
import { LoggerFactory } from '@app/common/logging/logger.factory';
import * as os from 'os';
import * as fs from 'fs';
interface DockerEvent {
  id: string;
  status: string;
  from: string;
  Actor: {
    ID: string;
    Attributes: {
      name: string;
      image: string;
      [key: string]: string;
    };
  };
  Action: string;
  scope: string;
  time: number;
  timeNano: number;
}

@Injectable()
export class DockerRuntimeMonitorService
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(DockerRuntimeMonitorService.name);
  private readonly LOG_TOKEN = process.env.MONITOR_SERVICE_TOKEN;
  private readonly snapshot_docker_logger: KafkaLogger;
  private docker: Docker;
  private eventStream:
    | (NodeJS.ReadableStream & { destroy?: () => void })
    | null = null;
  private latestStatuses: {
    name: string;
    status: string;
    reason: string;
    updatedAt: Date;
  }[] = [];
  constructor(
    private readonly prisma: DatabaseService,
    loggerFactory: LoggerFactory,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
  ) {
    this.docker = this.initializeDockerClient();
    this.snapshot_docker_logger = loggerFactory.create(
      'DockerRuntimeMonitorService',
      'MonitorService',
      this.LOG_TOKEN,
    );
  }
  private initializeDockerClient(): Docker {
    const platform = os.platform();
    let socketPath: string;

    switch (platform) {
      case 'win32':
        socketPath = '//./pipe/docker_engine';
        this.logger.log('🪟 Detected Windows - using named pipe for Docker');
        break;

      case 'darwin':
        socketPath = '/var/run/docker.sock';
        this.logger.log('🍎 Detected macOS - using Unix socket for Docker');
        break;

      case 'linux':
      default:
        socketPath = '/var/run/docker.sock';
        this.logger.log('🐧 Detected Linux - using Unix socket for Docker');
        break;
    }

    if (!fs.existsSync(socketPath) && platform !== 'win32') {
      this.logger.warn(
        `⚠️ Docker socket not found at ${socketPath}. Make sure Docker is running.`,
      );
    }

    const docker = new Docker({ socketPath });

    return docker;
  }
  async onModuleInit() {
    this.startDockerEventsStream().catch((err) => {
      const error = err as Error;
      this.logger.error(
        `Failed to start Docker event stream: ${error.message}`,
      );
    });
    await this.snapshotAllContainers();
  }

  onModuleDestroy() {
    if (this.eventStream) {
      this.eventStream.removeAllListeners();
      if (
        'destroy' in this.eventStream &&
        typeof this.eventStream.destroy === 'function'
      ) {
        this.eventStream.destroy();
      }
    }
  }

  private startDockerEventsStream(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.docker.getEvents({}, (err, stream) => {
        if (err) {
          const error = err as Error;
          this.logger.error(`Docker event stream error: ${error.message}`);
          reject(error);
          return;
        }

        this.logger.log('📡 Listening to Docker events...');
        this.eventStream = stream ?? null;

        // Fix: Wrap async handler in a synchronous function
        stream?.on('data', (buf: Buffer): void => {
          void this.handleDockerEvent(buf);
        });

        resolve();
      });
    });
  }

  // Extract async logic to a separate method
  private async handleDockerEvent(buf: Buffer): Promise<void> {
    try {
      const evt: DockerEvent = JSON.parse(buf.toString()) as DockerEvent;
      const containerId = evt.id;
      const name = evt.Actor?.Attributes?.name;
      const action = evt.Action;

      let status = 'UNKNOWN';
      let reason = action;
      let exitCode: number | undefined;

      try {
        const container = this.docker.getContainer(containerId);
        const inspect = await container.inspect();
        const st = inspect.State;

        if (action === 'start') {
          status = 'UP';
          reason = 'Container started';
        } else if (action === 'restart') {
          status = 'RESTARTING';
          reason = 'Container restarting';
        } else if (action === 'die') {
          status = 'DOWN';
          exitCode = st.ExitCode;
          if (st.OOMKilled) {
            reason = 'OOMKilled';
          } else if (exitCode !== 0) {
            reason = `Exited with code ${exitCode}`;
          } else {
            reason = 'Exited';
          }
        } else {
          status = st.Running ? 'UP' : 'DOWN';
        }
      } catch (inspectErr) {
        this.logger.warn(
          `Failed to inspect container ${containerId}: ${(inspectErr as Error).message}`,
        );
      }

      await this.prisma.service.updateMany({
        where: { name },
        data: {
          runtimeStatus: status,
          lastReason: reason,
          lastSeenAt: new Date(),
        },
      });

      // await this.pubSub.publish('serviceEventCreated', {
      //   serviceEventCreated: {
      //     id: `${name}-${Date.now()}`,
      //     service: name,
      //     status,
      //     cluster: 'docker',
      //     message: reason,
      //     createdAt: new Date().toISOString(),
      //   },
      // });

      this.logger.log(`🐳 [${name}] -> ${status} (${reason})`);
      this.latestStatuses = this.latestStatuses.filter((s) => s.name !== name);
      this.latestStatuses.push({
        name,
        status,
        reason,
        updatedAt: new Date(),
      });
    } catch (parseErr) {
      this.logger.error(
        `Failed to handle Docker event chunk: ${(parseErr as Error).message}`,
      );
    }
  }

  async snapshotAllContainers(): Promise<void> {
    const containers = await this.docker.listContainers({ all: true });

    this.latestStatuses = [];

    for (const c of containers) {
      const container = this.docker.getContainer(c.Id);
      const inspect = await container.inspect();
      const name = inspect.Name.replace(/^\//, '');
      const st = inspect.State;

      let status = 'UNKNOWN';
      let reason = '';

      if (st.Running) {
        status = 'UP';
        reason = 'Running';
      } else if (st.Restarting) {
        status = 'RESTARTING';
        reason = 'Container restarting';
      } else if (st.OOMKilled) {
        status = 'DOWN';
        reason = 'OOMKilled';
      } else if (st.Status === 'exited') {
        status = 'DOWN';
        reason = `Exited with code ${st.ExitCode}`;
      } else {
        status = 'DOWN';
        reason = st.Error || 'Stopped';
      }

      await this.prisma.service.updateMany({
        where: { name },
        data: {
          runtimeStatus: status,
          lastReason: reason,
          lastSeenAt: new Date(),
        },
      });
      this.latestStatuses.push({
        name,
        status,
        reason,
        updatedAt: new Date(),
      });

      await this.snapshot_docker_logger.debug(
        `Snapshot: ${name} -> ${status} (${reason})`,
      );
    }
  }

  getLatestStatuses() {
    return this.latestStatuses;
  }
}
