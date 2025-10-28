import { Inject, Injectable, Logger } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from './pubsub.provider';
import { HttpService } from '@nestjs/axios';
import { DatabaseService } from '@app/database';
import { Cron, CronExpression } from '@nestjs/schedule';
import { DockerK8sDiscoveryService } from './docker-k8s-discovery.service';
import { DockerRuntimeMonitorService } from './docker-runtime-monitor.service';
import { K8sRuntimeMonitorService } from './k8s-runtime-monitor.service';
import * as fs from 'fs';
import { addMinutes } from 'date-fns';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class MonitorServiceService {
  private readonly logger = new Logger(MonitorServiceService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly prisma: DatabaseService,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
    private readonly discovery: DockerK8sDiscoveryService,
    private readonly dockerMonitor: DockerRuntimeMonitorService,
    private readonly k8sMonitor: K8sRuntimeMonitorService,
  ) {}

  @Cron(CronExpression.EVERY_MINUTE)
  async checkServices(): Promise<void> {
    const env = this.detectEnvironment();
    this.logger.log(`🌍 Running environment detected: ${env}`);
    this.logger.log('🔍 Checking all services (Docker, K8s)...');
    await this.discovery.discoverAllServices();
    const services = await this.prisma.service.findMany();

    const dockerStatuses = this.dockerMonitor.getLatestStatuses?.() || [];
    const k8sStatuses = this.k8sMonitor.getLatestStatuses?.() || [];
    // console.log('services', services);
    // console.log('Dockerstatus', dockerStatuses);
    // console.log('K8sService', k8sStatuses);
    let k8sConnected = true;
    try {
      await this.k8sMonitor['k8sClient']?.listNamespace();
    } catch {
      k8sConnected = false;
      this.logger.warn('⚠️ Kubernetes cluster appears offline.');
    }
    if (!k8sConnected) {
      await this.prisma.service.updateMany({
        where: { cluster: { startsWith: 'k8s' } },
        data: {
          runtimeStatus: 'DOWN',
          lastReason: 'Kubernetes cluster unreachable',
          lastSeenAt: new Date(),
        },
      });
    }
    for (const svc of services) {
      let status = 'UNKNOWN';
      let reason = '';

      const normalizedName = svc.name
        .toLowerCase()
        .replace(/^docker-/, '')
        .replace(/-service$/, '');

      const fuzzyMatch = (a: string, b: string): boolean => {
        const na = a
          .toLowerCase()
          .replace(/^docker-/, '')
          .replace(/-service$/, '');
        const nb = b
          .toLowerCase()
          .replace(/^docker-/, '')
          .replace(/-service$/, '');
        return na === nb || na.includes(nb) || nb.includes(na);
      };

      const dockerStatus = dockerStatuses.find((s) =>
        fuzzyMatch(s.name, normalizedName),
      );
      const k8sStatus = k8sStatuses.find((s) =>
        fuzzyMatch(s.name, normalizedName),
      );

      if (dockerStatus) {
        status = dockerStatus.status;
        reason = dockerStatus.reason || '';
      } else if (k8sStatus) {
        status = k8sStatus.status;
        reason = k8sStatus.reason || '';
      } else {
        status = 'DOWN';
        reason = 'Service not found in Docker or K8s';
      }

      await this.updateServiceStatus(svc.id, status, reason);
      await this.publishServiceEvent(svc.name, svc.cluster, status, reason);
    }

    this.logger.log('✅ Full check cycle completed.');
  }
  private detectEnvironment(): string {
    if (fs.existsSync('/var/run/secrets/kubernetes.io/serviceaccount/token')) {
      return 'KUBERNETES';
    } else if (fs.existsSync('/.dockerenv')) {
      return 'DOCKER';
    } else {
      return 'LOCAL';
    }
  }

  private async updateServiceStatus(
    serviceId: string,
    status: string,
    reason: string,
  ) {
    await this.prisma.service.update({
      where: { id: serviceId },
      data: {
        runtimeStatus: status,
        lastReason: reason,
        lastSeenAt: new Date(),
      },
    });
  }
  @Cron(CronExpression.EVERY_10_MINUTES)
  async cleanupStaleServices(): Promise<void> {
    this.logger.log('🧹 Running auto-cleanup for stale services...');

    const thresholdMinutes = Number(process.env.SERVICE_CLEANUP_MINUTES || 30);
    const now = new Date();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const threshold = addMinutes(now, -thresholdMinutes) as Date;
    const staleServices = await this.prisma.service.findMany({
      where: {
        lastSeenAt: { lt: threshold },
      },
    });

    if (staleServices.length === 0) {
      this.logger.log('✅ No stale services found.');
      return;
    }

    for (const svc of staleServices) {
      await this.prisma.service.delete({ where: { id: svc.id } });
      this.logger.warn(
        `🗑️ Removed stale service: ${svc.name} (last seen at ${svc.lastSeenAt?.toISOString()})`,
      );

      await this.pubSub.publish('serviceEventCreated', {
        serviceEventCreated: {
          id: `${svc.name}-${Date.now()}`,
          service: svc.name,
          cluster: svc.cluster,
          status: 'REMOVED',
          message: 'Service removed after inactivity timeout',
          createdAt: new Date().toISOString(),
        },
      });
    }

    this.logger.log(
      `🧹 Cleanup completed. Removed ${staleServices.length} inactive services.`,
    );
  }
  private async publishServiceEvent(
    name: string,
    cluster: string,
    status: string,
    message: string,
  ): Promise<void> {
    const now = new Date();

    const lastEvent = await this.prisma.serviceEvent.findFirst({
      where: { service: name },
      orderBy: { createdAt: 'desc' },
    });

    const isFirstEvent = !lastEvent;
    const hasChanged =
      isFirstEvent ||
      lastEvent.status !== status ||
      (lastEvent.message || '') !== (message || '');
    let eventType: 'INITIAL' | 'STATUS_CHANGE' | 'RECOVERY' | 'FAILURE' =
      'STATUS_CHANGE';

    if (isFirstEvent) {
      eventType = 'INITIAL';
    } else if (lastEvent.status === 'DOWN' && status === 'UP') {
      eventType = 'RECOVERY';
    } else if (lastEvent.status === 'UP' && status === 'DOWN') {
      eventType = 'FAILURE';
    } else if (lastEvent.status !== status) {
      eventType = 'STATUS_CHANGE';
    }

    await this.prisma.$transaction(async (tx) => {
      await tx.service.updateMany({
        where: { name },
        data: {
          runtimeStatus: status,
          lastReason: message,
          lastSeenAt: now,
        },
      });

      if (hasChanged) {
        const newEvent = await tx.serviceEvent.create({
          data: {
            service: name,
            status,
            cluster,
            message,
            eventType,
            createdAt: now,
          },
        });

        await this.pubSub.publish('serviceEventCreated', {
          serviceEventCreated: {
            id: newEvent.id,
            service: newEvent.service,
            status: newEvent.status,
            cluster: newEvent.cluster,
            message: newEvent.message,
            eventType: newEvent.eventType,
            createdAt: newEvent.createdAt.toISOString(),
          },
        });

        this.logger.log(
          `📡 [${eventType}] Event for ${name}: ${status} (${message})`,
        );
      } else {
        this.logger.debug(
          `⏭️ No change for ${name} (status=${status}) → skipping event creation.`,
        );
      }
    });
  }
}
