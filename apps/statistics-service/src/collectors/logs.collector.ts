import { Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from '@app/database';

export interface LogSummary {
  service: string;
  errors: number;
  warnings: number;
  info: number;
  timestamp: Date;
}

@Injectable()
export class LogsCollector {
  private readonly logger = new Logger(LogsCollector.name);

  constructor(private readonly prisma: DatabaseService) {}

  async collectLastHour(): Promise<LogSummary[]> {
    const since = new Date(Date.now() - 60 * 60 * 1000);

    try {
      const logs = await this.prisma.logEntry.groupBy({
        by: ['service', 'level'],
        _count: { level: true },
        where: { timestamp: { gte: since } },
      });

      const result: LogSummary[] = [];

      for (const row of logs) {
        let entry = result.find((r) => r.service === row.service);
        if (!entry) {
          entry = {
            service: row.service,
            errors: 0,
            warnings: 0,
            info: 0,
            timestamp: new Date(),
          };
          result.push(entry);
        }

        if (row.level === 'error') entry.errors += row._count.level;
        if (row.level === 'warn') entry.warnings += row._count.level;
        if (row.level === 'debug') entry.info += row._count.level;
      }

      return result;
    } catch (err) {
      const error = err as Error;
      this.logger.error(`Failed to collect logs: ${error.message}`);
      return [];
    }
  }
}
