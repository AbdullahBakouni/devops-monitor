import { Inject, Injectable, Logger } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from '@app/common/pubsub/pubsub.provider';
import { DatabaseService } from '@app/database';
import { Cron, CronExpression } from '@nestjs/schedule';
import { DockerK8sDiscoveryService } from './docker-k8s-discovery.service';
import { DockerRuntimeMonitorService } from './docker-runtime-monitor.service';
import { K8sRuntimeMonitorService } from './k8s-runtime-monitor.service';
import { EventProcessorService } from 'apps/event-processor-service/src/event-processor-service.service';
import * as fs from 'fs';
import { addMinutes } from 'date-fns';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class MonitorServiceService {
  private readonly logger = new Logger(MonitorServiceService.name);

  // 🧠 Cache for latest runtime statuses
  private runtimeCache = new Map<
    string,
    { status: string; reason: string; cluster: string; updatedAt: Date }
  >();

  constructor(
    private readonly prisma: DatabaseService,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
    private readonly discovery: DockerK8sDiscoveryService,
    private readonly dockerMonitor: DockerRuntimeMonitorService,
    private readonly k8sMonitor: K8sRuntimeMonitorService,
    private readonly eventProcessor: EventProcessorService,
  ) {}

  /** 🕒 Runs every minute to update all runtime statuses and process events */
  @Cron(CronExpression.EVERY_MINUTE)
  async checkServices(): Promise<void> {
    const env = this.detectEnvironment();
    this.logger.log(`🌍 Running environment detected: ${env}`);
    this.logger.log('🔍 Checking all services (Docker, K8s)...');
    await this.discovery.discoverAllServices();

    await this.refreshRuntimeCache();

    const services = await this.prisma.service.findMany();
    const now = new Date();

    const existingNames = services.map((s) => s.name);
    for (const [name, entry] of this.runtimeCache.entries()) {
      if (!existingNames.includes(name)) {
        const existsInDB = await this.prisma.service.findFirst({
          where: { name },
          select: { id: true },
        });

        if (!existsInDB) {
          this.logger.warn(
            `🚫 Skipping notification for ${name} — not found in DB (probably old cache).`,
          );
          this.runtimeCache.delete(name);
          continue;
        }
        this.logger.warn(`🧼 Removing stale cached service: ${name}`);
        this.runtimeCache.delete(name);

        await this.eventProcessor.handleRuntimeStatus({
          service: name,
          status: 'DOWN',
          cluster: entry.cluster,
          message: 'Service disappeared from discovery',
        });
      }
    }

    for (const svc of services) {
      const runtime = this.resolveRuntimeForService(svc.name);
      const cached = this.runtimeCache.get(svc.name);

      const isFirstTime = !cached;
      const hasChanged =
        !cached ||
        cached.status !== runtime.status ||
        cached.reason !== runtime.reason;

      const COOLDOWN_MS = 20_000;
      const lastUpdated = cached?.updatedAt?.getTime() ?? 0;
      const withinCooldown = now.getTime() - lastUpdated < COOLDOWN_MS;

      if (!isFirstTime && !hasChanged && withinCooldown) {
        this.logger.debug(
          `😴 ${svc.name} unchanged (${runtime.status}) — still within cooldown.`,
        );
        continue;
      }

      this.logger.debug(
        isFirstTime
          ? `🆕 ${svc.name} detected for the first time (${runtime.status})`
          : `📡 ${svc.name} changed or refreshed (${runtime.status})`,
      );

      await this.eventProcessor.handleRuntimeStatus({
        service: svc.name,
        status: runtime.status,
        cluster: runtime.cluster,
        message: runtime.reason,
      });
      this.runtimeCache.set(svc.name, {
        status: runtime.status,
        reason: runtime.reason,
        cluster: runtime.cluster,
        updatedAt: now,
      });
    }

    this.logger.log('✅ Full check cycle completed.');
  }
  @Cron(CronExpression.EVERY_10_MINUTES)
  async cleanupOldDatabaseServices(): Promise<void> {
    const thresholdMinutes = Number(
      process.env.SERVICE_DB_CLEANUP_MINUTES || 15,
    );
    const thresholdDate = addMinutes(new Date(), -thresholdMinutes);

    this.logger.log(
      `🧹 Checking for old DB services older than ${thresholdMinutes} minutes...`,
    );

    const oldServices = await this.prisma.service.findMany({
      where: { lastSeenAt: { lt: thresholdDate } },
    });

    if (oldServices.length === 0) {
      this.logger.log('✅ No old DB services found.');
      return;
    }

    for (const svc of oldServices) {
      this.logger.warn(
        `🗑️ Removing old service from DB: ${svc.name} (last seen ${svc.lastSeenAt?.toISOString()})`,
      );

      await this.eventProcessor.handleRuntimeStatus({
        service: svc.name,
        status: 'REMOVED',
        cluster: svc.cluster || 'unknown',
        message: 'Service removed after inactivity timeout',
      });

      await this.prisma.service.delete({ where: { id: svc.id } });
    }

    this.logger.log(
      `🧹 Cleanup completed — removed ${oldServices.length} services.`,
    );
  }

  /** 🔍 Detect runtime environment */
  private detectEnvironment(): string {
    if (fs.existsSync('/var/run/secrets/kubernetes.io/serviceaccount/token')) {
      return 'KUBERNETES';
    } else if (fs.existsSync('/.dockerenv')) {
      return 'DOCKER';
    } else {
      return 'LOCAL';
    }
  }

  /** 🧹 Cleanup stale (inactive) services */
  @Cron(CronExpression.EVERY_10_MINUTES)
  async cleanupStaleServices(): Promise<void> {
    this.logger.log('🧹 Running auto-cleanup for stale services...');

    const thresholdMinutes = Number(process.env.SERVICE_CLEANUP_MINUTES || 30);
    const now = new Date();
    const threshold = addMinutes(now, -thresholdMinutes) as Date;

    const staleServices = await this.prisma.service.findMany({
      where: { lastSeenAt: { lt: threshold } },
    });

    if (staleServices.length === 0) {
      this.logger.log('✅ No stale services found.');
      return;
    }

    for (const svc of staleServices) {
      await this.prisma.service.delete({ where: { id: svc.id } });
      this.runtimeCache.delete(svc.name); // 🧠 remove from cache too

      this.logger.warn(
        `🗑️ Removed stale service: ${svc.name} (last seen ${svc.lastSeenAt?.toISOString()})`,
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
      `🧹 Cleanup completed. Removed ${staleServices.length} services.`,
    );
  }

  /** ⚙️ Refresh cache from Docker + K8s monitors */
  private refreshRuntimeCache(): Promise<void> {
    const dockerStatuses = this.dockerMonitor.getLatestStatuses?.() || [];
    const k8sStatuses = this.k8sMonitor.getLatestStatuses?.() || [];

    this.runtimeCache.clear();

    for (const s of dockerStatuses) {
      this.runtimeCache.set(s.name, {
        status: s.status,
        reason: s.reason,
        cluster: 'docker',
        updatedAt: s.updatedAt,
      });
    }

    for (const s of k8sStatuses) {
      this.runtimeCache.set(s.name, {
        status: s.status,
        reason: s.reason,
        cluster: 'k8s',
        updatedAt: s.updatedAt,
      });
    }

    this.logger.debug(
      `🧠 Runtime cache updated: ${this.runtimeCache.size} entries`,
    );
    return Promise.resolve();
  }

  /** 🧭 Resolve runtime info for a specific service from cache */
  private resolveRuntimeForService(serviceName: string) {
    const cached = this.runtimeCache.get(serviceName);
    if (cached) {
      return {
        status: cached.status,
        reason: cached.reason,
        cluster: cached.cluster,
      };
    }
    return {
      status: 'UNKNOWN',
      reason: 'Service not found in Docker or K8s',
      cluster: 'unknown',
    };
  }
}
