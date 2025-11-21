import { Injectable, Logger } from '@nestjs/common';
import { MetricsCollector } from '../collectors/metrics.collector';
import { LogsCollector } from '../collectors/logs.collector';
import { EventsCollector } from '../collectors/events.collector';
import { DatabaseService } from '@app/database';

// Interfaces for collector return types
interface MetricSample {
  service: string;
  cpu: number;
  memory: number;
}

interface LogStats {
  service: string;
  errors: number;
  warnings: number;
  info: number;
}

interface EventStats {
  service: string;
  failures: number;
  recoveries: number;
  crashLoops: number;
}

interface StatisticsHourlyData {
  service: string;
  hour: Date;
  avgCpu: number;
  avgMemory: number;
  peakCpu: number;
  peakMemory: number;
  logsErrors: number;
  logsWarnings: number;
  logsInfo: number;
  failures: number;
  recoveries: number;
  crashLoops: number;
  anomalies: number;
}

interface StatisticsHourlyResult {
  id: string;
  service: string;
  hour: Date;
  avgCpu: number;
  avgMemory: number;
  peakCpu: number;
  peakMemory: number;
  logsErrors: number;
  logsWarnings: number;
  logsInfo: number;
  failures: number;
  recoveries: number;
  crashLoops: number;
  anomalies: number;
  createdAt: Date;
}

@Injectable()
export class HourlyAggregator {
  private readonly logger = new Logger(HourlyAggregator.name);

  constructor(
    private readonly metrics: MetricsCollector,
    private readonly logs: LogsCollector,
    private readonly events: EventsCollector,
    private readonly prisma: DatabaseService,
  ) {}

  async run(): Promise<void> {
    this.logger.log('⏱️ Running Hourly Aggregation...');
    const hourStart = new Date(Date.now() - 60 * 60 * 1000);

    const metricsData: MetricSample[] =
      await this.metrics.collectLastSamples(200);
    const logsData: LogStats[] = await this.logs.collectLastHour();
    const eventsData: EventStats[] = await this.events.collectLastDay();

    // Group by service
    const services = new Set<string>([
      ...metricsData.map((m) => m.service),
      ...logsData.map((l) => l.service),
      ...eventsData.map((e) => e.service),
    ]);

    // Use Promise.all with map for better performance
    const results: StatisticsHourlyResult[] = await Promise.all(
      Array.from(services).map(async (svc): Promise<StatisticsHourlyResult> => {
        const svcMetrics = metricsData.filter((m) => m.service === svc);
        const svcLogs = logsData.find((l) => l.service === svc);
        const svcEvents = eventsData.find((e) => e.service === svc);

        const avgCpu =
          svcMetrics.reduce((a, b) => a + b.cpu, 0) / (svcMetrics.length || 1);
        const avgMem =
          svcMetrics.reduce((a, b) => a + b.memory, 0) /
          (svcMetrics.length || 1);
        const peakCpu = Math.max(...svcMetrics.map((m) => m.cpu), 0);
        const peakMem = Math.max(...svcMetrics.map((m) => m.memory), 0);

        const data: StatisticsHourlyData = {
          service: svc,
          hour: hourStart,
          avgCpu,
          avgMemory: avgMem,
          peakCpu,
          peakMemory: peakMem,
          logsErrors: svcLogs?.errors ?? 0,
          logsWarnings: svcLogs?.warnings ?? 0,
          logsInfo: svcLogs?.info ?? 0,
          failures: svcEvents?.failures ?? 0,
          recoveries: svcEvents?.recoveries ?? 0,
          crashLoops: svcEvents?.crashLoops ?? 0,
          anomalies: 0, // ML later can increment
        };

        // Type-safe Prisma call
        return (await this.prisma.statisticsHourly.create({
          data,
        })) as StatisticsHourlyResult;
      }),
    );

    this.logger.log(
      `✅ Hourly aggregation completed for: ${services.size} services (${results.length} records created)`,
    );
  }
}
