import { Inject, Injectable, Logger } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from './pubsub.provider';
import { HttpService } from '@nestjs/axios';
import { DatabaseService } from '@app/database';
import { Cron, CronExpression } from '@nestjs/schedule';
import { DockerK8sDiscoveryService } from './docker-k8s-discovery.service';
import { DockerRuntimeMonitorService } from './docker-runtime-monitor.service';
import { K8sRuntimeMonitorService } from './k8s-runtime-monitor.service';
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
    this.logger.log('🔍 Checking all services (Docker & K8s)...');
    await this.discovery.discoverAllServices();
    const services = await this.prisma.service.findMany();

    const dockerStatuses = this.dockerMonitor.getLatestStatuses?.() || [];
    const k8sStatuses = this.k8sMonitor.getLatestStatuses?.() || [];
    console.log('services', services);
    console.log('Dockerstatus', dockerStatuses);
    for (const svc of services) {
      let status = 'UNKNOWN';
      let reason = '';

      // اسم الخدمة بعد التنظيف
      const normalizedName = svc.name
        .toLowerCase()
        .replace(/^docker-/, '')
        .replace(/-service$/, '');

      // وظيفة للمقارنة المرنة
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

  private async publishServiceEvent(
    name: string,
    cluster: string,
    status: string,
    message: string,
  ) {
    const event = {
      id: `${name}-${Date.now()}`,
      service: name,
      cluster,
      status,
      message,
      createdAt: new Date().toISOString(),
    };

    await this.pubSub.publish('serviceEventCreated', {
      serviceEventCreated: event,
    });

    this.logger.log(`📡 Event published: ${name} → ${status}`);
  }
}
