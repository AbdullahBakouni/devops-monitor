import { Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from '@app/database';
import { differenceInMinutes } from 'date-fns';
import { EventType, Prisma, PrismaClient } from '@app/database/prisma';

type ServiceEventHistory = Prisma.ServiceEventHistoryGetPayload<object>;

interface ServiceAnalytics {
  name: string;
  currentStatus: string | null;
  failures: number;
  recoveries: number;
  avgDowntimeMinutes: number;
  uptimePercent: number;
  lastSeenAt: Date | null;
}

@Injectable()
export class ServiceEventHistoryService {
  private readonly logger = new Logger(ServiceEventHistoryService.name);
  private readonly client: PrismaClient;

  constructor(private readonly prisma: DatabaseService) {
    this.client = this.prisma as unknown as PrismaClient;
  }

  async getHistoryForService(service: string): Promise<ServiceEventHistory[]> {
    const history = await this.client.serviceEventHistory.findMany({
      where: { service },
      orderBy: { recordedAt: 'desc' },
    });
    return history;
  }

  async getFailureCount(service: string): Promise<number> {
    return this.client.serviceEventHistory.count({
      where: { service, eventType: EventType.FAILURE },
    });
  }

  async getAverageDowntime(service: string): Promise<number> {
    const events = await this.client.serviceEventHistory.findMany({
      where: {
        service,
        eventType: { in: [EventType.FAILURE, EventType.RECOVERY] },
      },
      orderBy: { recordedAt: 'asc' },
    });

    let totalDowntime = 0;
    let count = 0;
    let lastDownTime: Date | null = null;

    for (const ev of events) {
      if (ev.eventType === EventType.FAILURE) {
        lastDownTime = ev.recordedAt;
      } else if (ev.eventType === EventType.RECOVERY && lastDownTime) {
        totalDowntime += differenceInMinutes(ev.recordedAt, lastDownTime);
        count++;
        lastDownTime = null;
      }
    }

    return count > 0 ? totalDowntime / count : 0;
  }

  async getRecoveryCount(service: string): Promise<number> {
    return this.client.serviceEventHistory.count({
      where: { service, eventType: EventType.RECOVERY },
    });
  }

  async getServiceAnalytics(): Promise<ServiceAnalytics[]> {
    const services = await this.client.service.findMany();
    const analytics: ServiceAnalytics[] = [];

    for (const svc of services) {
      const [failures, recoveries, avgDowntime] = await Promise.all([
        this.getFailureCount(svc.name),
        this.getRecoveryCount(svc.name),
        this.getAverageDowntime(svc.name),
      ]);

      analytics.push({
        name: svc.name,
        currentStatus: svc.runtimeStatus,
        failures,
        recoveries,
        avgDowntimeMinutes: avgDowntime,
        uptimePercent: this.calculateUptimePercent(failures, recoveries),
        lastSeenAt: svc.lastSeenAt,
      });
    }

    return analytics.sort((a, b) => a.name.localeCompare(b.name));
  }

  private calculateUptimePercent(failures: number, recoveries: number): number {
    const total = failures + recoveries;
    if (total === 0) return 100;
    const downRatio = failures / total;
    return Math.max(0, 100 - downRatio * 100);
  }
}
