import { Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from '@app/database';

// Interfaces for database models
interface StatisticsHourlyRecord {
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

interface StatisticsDailyData {
  service: string;
  day: Date;
  avgCpu: number;
  avgMemory: number;
  errors: number;
  warnings: number;
  info: number;
  failures: number;
  recoveries: number;
  crashLoops: number;
  uptimePercentage: number;
  anomalyCount: number;
}

interface StatisticsDailyResult {
  id: string;
  service: string;
  day: Date;
  avgCpu: number;
  avgMemory: number;
  errors: number;
  warnings: number;
  info: number;
  failures: number;
  recoveries: number;
  crashLoops: number;
  uptimePercentage: number;
  anomalyCount: number;
  createdAt: Date;
}

@Injectable()
export class DailyAggregator {
  private readonly logger = new Logger(DailyAggregator.name);

  constructor(private readonly prisma: DatabaseService) {}

  async run(): Promise<void> {
    this.logger.log('📆 Running Daily Aggregation...');
    const dayStart = new Date();
    dayStart.setHours(0, 0, 0, 0);

    const rows: StatisticsHourlyRecord[] =
      (await this.prisma.statisticsHourly.findMany({
        where: { hour: { gte: dayStart } },
      })) as StatisticsHourlyRecord[];

    const grouped = new Map<string, StatisticsHourlyRecord[]>();
    for (const row of rows) {
      if (!grouped.has(row.service)) {
        grouped.set(row.service, []);
      }
      grouped.get(row.service)!.push(row);
    }

    const results: StatisticsDailyResult[] = await Promise.all(
      Array.from(grouped.entries()).map(
        async ([service, list]): Promise<StatisticsDailyResult> => {
          const avgCpu =
            list.reduce((a, b) => a + b.avgCpu, 0) / (list.length || 1);
          const avgMem =
            list.reduce((a, b) => a + b.avgMemory, 0) / (list.length || 1);
          const errors = list.reduce((a, b) => a + b.logsErrors, 0);
          const warnings = list.reduce((a, b) => a + b.logsWarnings, 0);
          const info = list.reduce((a, b) => a + b.logsInfo, 0);
          const failures = list.reduce((a, b) => a + b.failures, 0);
          const recoveries = list.reduce((a, b) => a + b.recoveries, 0);
          const crashLoops = list.reduce((a, b) => a + b.crashLoops, 0);
          const anomalies = list.reduce((a, b) => a + b.anomalies, 0);
          const uptimePercentage =
            list.length > 0
              ? ((list.length - failures) / list.length) * 100
              : 100;

          const data: StatisticsDailyData = {
            service,
            day: dayStart,
            avgCpu,
            avgMemory: avgMem,
            errors,
            warnings,
            info,
            failures,
            recoveries,
            crashLoops,
            uptimePercentage,
            anomalyCount: anomalies,
          };

          return (await this.prisma.statisticsDaily.create({
            data,
          })) as StatisticsDailyResult;
        },
      ),
    );

    this.logger.log(
      `📆 Daily aggregation completed for ${grouped.size} services (${results.length} records created).`,
    );
  }
}
