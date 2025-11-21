import { Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from '@app/database';

export interface MetricsSnapshot {
  service: string;
  cpu: number;
  memory: number;
  networkRx: number;
  networkTx: number;
  source: string;
  timestamp: Date;
}

@Injectable()
export class MetricsCollector {
  private readonly logger = new Logger(MetricsCollector.name);

  constructor(private readonly prisma: DatabaseService) {}

  async collectLastSamples(limit = 10): Promise<MetricsSnapshot[]> {
    try {
      const rows = await this.prisma.metrics.findMany({
        orderBy: { createdAt: 'desc' },
        take: limit,
      });

      return rows.map((r) => ({
        service: r.service,
        cpu: r.cpu,
        memory: r.memory,
        networkRx: r.networkRx,
        networkTx: r.networkTx,
        source: r.source,
        timestamp: r.createdAt,
      }));
    } catch (err) {
      const error = err as Error;
      this.logger.error(`Failed to collect metrics: ${error.message}`);
      return [];
    }
  }

  async collectByService(service: string, limit = 50) {
    return this.prisma.metrics.findMany({
      where: { service },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  }
}
