import { Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from '@app/database';
import { EventType } from '@app/database/prisma';

export interface EventStats {
  service: string;
  failures: number;
  recoveries: number;
  crashLoops: number;
  statusChanges: number;
  timestamp: Date;
}

@Injectable()
export class EventsCollector {
  private readonly logger = new Logger(EventsCollector.name);

  constructor(private readonly prisma: DatabaseService) {}

  async collectLastDay(): Promise<EventStats[]> {
    const since = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const events = await this.prisma.serviceEvent.groupBy({
      by: ['service', 'eventType'],
      where: { createdAt: { gte: since } },
      _count: true,
    });

    const statsMap = new Map<string, EventStats>();

    for (const e of events) {
      if (!statsMap.has(e.service)) {
        statsMap.set(e.service, {
          service: e.service,
          failures: 0,
          recoveries: 0,
          crashLoops: 0,
          statusChanges: 0,
          timestamp: new Date(),
        });
      }

      const row = statsMap.get(e.service)!;

      if (e.eventType === EventType.FAILURE) row.failures += e._count;
      if (e.eventType === EventType.RECOVERY) row.recoveries += e._count;
      if (e.eventType === EventType.CRASH_LOOP) row.crashLoops += e._count;
      if (e.eventType === EventType.STATUS_CHANGE)
        row.statusChanges += e._count;
    }

    return [...statsMap.values()];
  }
}
