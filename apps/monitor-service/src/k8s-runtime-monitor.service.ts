import {
  Injectable,
  Logger,
  OnModuleInit,
  OnModuleDestroy,
  Inject,
} from '@nestjs/common';
import * as k8s from '@kubernetes/client-node';
import { DatabaseService } from '@app/database';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from './pubsub.provider';

@Injectable()
export class K8sRuntimeMonitorService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(K8sRuntimeMonitorService.name);
  private kubeConfig: k8s.KubeConfig;
  private coreApi: k8s.CoreV1Api;
  private watch: k8s.Watch;
  private latestStatuses: {
    name: string;
    namespace: string;
    status: string;
    reason: string;
    updatedAt: Date;
  }[] = [];

  constructor(
    private readonly prisma: DatabaseService,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
  ) {
    this.kubeConfig = new k8s.KubeConfig();
    try {
      this.kubeConfig.loadFromDefault();
      this.logger.log('✅ Loaded Kubernetes configuration');
    } catch {
      try {
        this.kubeConfig.loadFromCluster();
        this.logger.log('✅ Loaded in-cluster Kubernetes config');
      } catch {
        this.logger.warn('⚠️ Could not load any Kubernetes config');
      }
    }
    this.coreApi = this.kubeConfig.makeApiClient(k8s.CoreV1Api);
    this.watch = new k8s.Watch(this.kubeConfig);
  }

  onModuleInit() {
    this.startWatchPods();
  }

  onModuleDestroy() {
    this.logger.log('🛑 Stopping K8s runtime monitor');
  }

  private startWatchPods(): void {
    this.logger.log('📡 Watching Kubernetes pods for changes...');

    void this.watch
      .watch(
        '/api/v1/pods',
        {},
        (type, pod: k8s.V1Pod) => {
          void this.handlePodEvent(type, pod);
        },
        (err) => {
          this.logger.error(`K8s Watch error: ${(err as Error).message}`);
        },
      )
      .catch((err) => {
        this.logger.error(
          `Failed to start K8s watch: ${(err as Error).message}`,
        );
      });
  }

  private async handlePodEvent(type: string, pod: k8s.V1Pod): Promise<void> {
    try {
      const name = pod.metadata?.name ?? 'unknown';
      const ns = pod.metadata?.namespace ?? 'default';
      const phase = pod.status?.phase ?? 'Unknown';

      let status = 'UNKNOWN';
      let reason = phase;

      const containerStatuses = pod.status?.containerStatuses || [];
      for (const c of containerStatuses) {
        if (c.state?.waiting?.reason) reason = c.state.waiting.reason;
        if (c.state?.terminated?.reason) reason = c.state.terminated.reason;
        if (
          c.state?.terminated?.exitCode &&
          c.state.terminated.exitCode !== 0
        ) {
          reason = `Exited code ${c.state.terminated.exitCode}`;
        }
      }

      switch (phase) {
        case 'Running':
          status = 'UP';
          break;
        case 'Pending':
          status = 'PENDING';
          break;
        case 'Succeeded':
          status = 'COMPLETED';
          break;
        case 'Failed':
          status = 'DOWN';
          break;
        default:
          status = 'UNKNOWN';
      }

      if (reason === 'CrashLoopBackOff') status = 'DOWN';
      if (reason === 'OOMKilled') status = 'DOWN';
      if (reason === 'ImagePullBackOff') status = 'DOWN';

      await this.prisma.service.updateMany({
        where: { name: name },
        data: {
          runtimeStatus: status,
          lastReason: reason,
          lastSeenAt: new Date(),
        },
      });

      await this.pubSub.publish('serviceEventCreated', {
        serviceEventCreated: {
          id: `${name}-${Date.now()}`,
          service: name,
          cluster: `k8s-${ns}`,
          status,
          message: reason,
          createdAt: new Date().toISOString(),
        },
      });

      this.logger.log(`☸️ [${ns}/${name}] -> ${status} (${reason})`);
      this.latestStatuses = this.latestStatuses.filter((s) => s.name !== name);
      this.latestStatuses.push({
        name,
        namespace: ns,
        status,
        reason,
        updatedAt: new Date(),
      });
    } catch (err) {
      this.logger.error(
        `Error processing pod event: ${(err as Error).message}`,
      );
    }
  }
  getLatestStatuses() {
    return this.latestStatuses;
  }
}
