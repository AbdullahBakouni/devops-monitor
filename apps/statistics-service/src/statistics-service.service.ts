import { Injectable, Logger, Inject } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from '@app/common/pubsub/pubsub.provider';
import { DatabaseService } from '@app/database';

// Collectors
import { EventsCollector } from './collectors/events.collector';
import { MetricsCollector } from './collectors/metrics.collector';
import { LogsCollector } from './collectors/logs.collector';

// Aggregators
import { HourlyAggregator } from './aggregators/hourly.aggregator';
import { DailyAggregator } from './aggregators/daily.aggregator';

// Engines
import { RiskEngine, RiskInput } from './engines/risk.engine';
import { RCAEngine } from './engines/rca.engine';
import {
  FailurePredictor,
  FailurePredictInput,
} from './engines/failure-predictor.engine';

// ========== INTERFACES ==========

interface StatisticsHourly {
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

interface StatisticsDaily {
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

interface ServiceRisk {
  id: string;
  service: string;
  riskScore: number;
  level: string;
  reason: string | null;
  createdAt: Date;
}

interface RootCauseReport {
  id: string;
  service: string;
  cause: string;
  confidence: number;
  createdAt: Date;
}

interface FailurePrediction {
  id: string;
  service: string;
  windowHours: number;
  probability: number;
  reason: string | null;
  createdAt: Date;
}

interface ServiceDailyStats {
  id: string;
  service: string;
  date: Date;
  avgCpu: number;
  avgMemory: number;
  failures: number;
  anomalies: number;
  createdAt: Date;
}

interface LogEntry {
  id: string;
  service: string;
  level: string;
  message: string;
  timestamp: Date;
}

interface ServiceEvent {
  id: string;
  service: string;
  eventType: string;
  createdAt: Date;
}

interface ServiceDistinct {
  service: string;
}

interface RiskUpdatePayload {
  service: string;
  riskScore: number;
  level: string;
  reason: string | null;
  timestamp: string;
}

interface PredictionUpdatePayload {
  service: string;
  windowHours: number;
  probability: number;
  reason: string | null;
  timestamp: string;
}

interface RCAReportPayload {
  service: string;
  cause: string;
  confidence: number;
  timestamp: string;
}

interface StatisticsSummary {
  risks: ServiceRisk[];
  predictions: FailurePrediction[];
  dailyStats: ServiceDailyStats[];
}

interface PipelineError extends Error {
  name: string;
  message: string;
  stack?: string;
}

// ========== SERVICE ==========

@Injectable()
export class StatisticsService {
  private readonly logger = new Logger(StatisticsService.name);

  constructor(
    private readonly prisma: DatabaseService,
    // Collectors
    private readonly eventsCollector: EventsCollector,
    private readonly metricsCollector: MetricsCollector,
    private readonly logsCollector: LogsCollector,
    // Aggregators
    private readonly hourlyAgg: HourlyAggregator,
    private readonly dailyAgg: DailyAggregator,
    // Engines
    private readonly riskEngine: RiskEngine,
    private readonly rcaEngine: RCAEngine,
    private readonly predictionEngine: FailurePredictor,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
  ) {}

  /**
   * 🔁 Full statistics pipeline
   * Runs every minute: collect → aggregate → analyze → broadcast
   */
  @Cron(CronExpression.EVERY_MINUTE)
  async runPipeline(): Promise<void> {
    try {
      this.logger.log('📊 Statistics Pipeline Started');

      // Phase 1: Collect raw data
      await this.collectPhase();

      // Phase 2: Aggregate data (hourly only, daily runs separately)
      await this.aggregatePhase();

      // Phase 3: Run analysis engines
      await this.analysisPhase();

      // Phase 4: Broadcast results
      await this.broadcastPhase();

      this.logger.log('✅ Statistics pipeline completed successfully');
    } catch (err) {
      const error = err as PipelineError;
      this.logger.error(`❌ Pipeline failed: ${error.message}`, error.stack);
      throw error;
    }
  }

  /**
   * 📆 Daily aggregation (runs once per day at midnight)
   */
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async runDailyAggregation(): Promise<void> {
    try {
      this.logger.log('📆 Running daily aggregation');
      await this.dailyAgg.run();

      // Optionally update daily stats model
      await this.updateDailyStatsModel();

      this.logger.log('✅ Daily aggregation completed');
    } catch (err) {
      const error = err as PipelineError;
      this.logger.error(
        `❌ Daily aggregation failed: ${error.message}`,
        error.stack,
      );
    }
  }

  /**
   * Phase 1: Collect raw data from all sources
   */
  private async collectPhase(): Promise<void> {
    this.logger.debug('🔍 Phase 1: Collecting raw data');

    // Run collectors in parallel for better performance
    await Promise.all([
      this.eventsCollector.collectLastDay(),
      this.metricsCollector.collectLastSamples(200),
      this.logsCollector.collectLastHour(),
    ]);
  }

  /**
   * Phase 2: Aggregate collected data
   */
  private async aggregatePhase(): Promise<void> {
    this.logger.debug('📊 Phase 2: Aggregating data');

    // Hourly aggregation (daily runs on separate cron)
    await this.hourlyAgg.run();
  }

  /**
   * Phase 3: Run all analysis engines
   */
  private async analysisPhase(): Promise<void> {
    this.logger.debug('🧠 Phase 3: Running analysis engines');

    // Get all unique services from recent hourly stats
    const services = await this.getActiveServices();

    // Process each service in parallel
    await Promise.all(services.map((service) => this.analyzeService(service)));
  }

  /**
   * Analyze a single service: risk + RCA + predictions
   */
  private async analyzeService(service: string): Promise<void> {
    try {
      // Get recent data for this service
      const [hourlyStats, metrics, logs] = await Promise.all([
        this.getRecentHourlyStats(service),
        this.metricsCollector.collectByService(service, 50),
        this.getRecentLogs(service),
        this.getRecentEvents(service),
      ]);

      if (hourlyStats.length === 0) {
        this.logger.debug(`No stats for service: ${service}`);
        return;
      }

      const latestStats = hourlyStats[0];

      // 1. Calculate Risk Score
      const riskInput: RiskInput = {
        avgCpu: latestStats.avgCpu,
        avgMemory: latestStats.avgMemory,
        failuresLastHour: latestStats.failures,
        anomalyCount: latestStats.anomalies,
      };

      const riskResult = this.riskEngine.calculate(riskInput);

      // Store risk assessment
      await this.prisma.serviceRisk.create({
        data: {
          service,
          riskScore: riskResult.score,
          level: riskResult.level,
          reason: riskResult.reason,
        },
      });

      // 2. Root Cause Analysis (if there are failures)
      if (latestStats.failures > 0 || riskResult.level === 'CRITICAL') {
        const rcaResult = this.rcaEngine.analyze({
          logs: logs.map((l) => ({ message: l.message, level: l.level })),
          metrics: metrics.map((m) => ({
            cpu: m.cpu,
            memory: m.memory,
            createdAt: m.createdAt,
          })),
          anomalies: [], // No anomaly table available
          riskScore: riskResult.score,
        });

        await this.prisma.rootCauseReport.create({
          data: {
            service,
            cause: rcaResult.cause,
            confidence: rcaResult.confidence,
          },
        });
      }

      // 3. Failure Prediction (24h window)
      const predictionInput: FailurePredictInput = {
        trendCpu: this.calculateTrend(hourlyStats.map((s) => s.avgCpu)),
        trendMemory: this.calculateTrend(hourlyStats.map((s) => s.avgMemory)),
        anomalies24h: hourlyStats.reduce((sum, s) => sum + s.anomalies, 0),
        failures24h: hourlyStats.reduce((sum, s) => sum + s.failures, 0),
      };

      const prediction = this.predictionEngine.predict(predictionInput);

      await this.prisma.failurePrediction.create({
        data: {
          service,
          windowHours: 24,
          probability: prediction.probability,
          reason: prediction.reason,
        },
      });
    } catch (err) {
      const error = err as PipelineError;
      this.logger.error(
        `Failed to analyze service ${service}: ${error.message}`,
        error.stack,
      );
    }
  }

  /**
   * Phase 4: Broadcast results via GraphQL subscriptions
   */
  private async broadcastPhase(): Promise<void> {
    this.logger.debug('📡 Phase 4: Broadcasting results');

    const [risks, predictions, rcaReports] = await Promise.all([
      this.prisma.serviceRisk.findMany({
        orderBy: { createdAt: 'desc' },
        take: 100,
      }) as Promise<ServiceRisk[]>,
      this.prisma.failurePrediction.findMany({
        orderBy: { createdAt: 'desc' },
        take: 100,
      }) as Promise<FailurePrediction[]>,
      this.prisma.rootCauseReport.findMany({
        orderBy: { createdAt: 'desc' },
        take: 50,
      }) as Promise<RootCauseReport[]>,
    ]);

    // Broadcast risks
    await Promise.all(
      risks.map((risk) => {
        const payload: RiskUpdatePayload = {
          service: risk.service,
          riskScore: risk.riskScore,
          level: risk.level,
          reason: risk.reason,
          timestamp: risk.createdAt.toISOString(),
        };
        return this.pubSub.publish('riskUpdated', { riskUpdated: payload });
      }),
    );

    // Broadcast predictions
    await Promise.all(
      predictions.map((pred) => {
        const payload: PredictionUpdatePayload = {
          service: pred.service,
          windowHours: pred.windowHours,
          probability: pred.probability,
          reason: pred.reason,
          timestamp: pred.createdAt.toISOString(),
        };
        return this.pubSub.publish('predictionUpdated', {
          predictionUpdated: payload,
        });
      }),
    );

    // Broadcast RCA reports
    await Promise.all(
      rcaReports.map((rca) => {
        const payload: RCAReportPayload = {
          service: rca.service,
          cause: rca.cause,
          confidence: rca.confidence,
          timestamp: rca.createdAt.toISOString(),
        };
        return this.pubSub.publish('rcaReportCreated', {
          rcaReportCreated: payload,
        });
      }),
    );
  }

  /**
   * Helper: Get list of active services from recent hourly stats
   */
  private async getActiveServices(): Promise<string[]> {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

    const services = (await this.prisma.statisticsHourly.findMany({
      where: { hour: { gte: oneHourAgo } },
      select: { service: true },
      distinct: ['service'],
    })) as ServiceDistinct[];

    return services.map((s) => s.service);
  }

  /**
   * Helper: Get recent hourly stats for a service (last 24 hours)
   */
  private async getRecentHourlyStats(
    service: string,
  ): Promise<StatisticsHourly[]> {
    const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    return this.prisma.statisticsHourly.findMany({
      where: {
        service,
        hour: { gte: dayAgo },
      },
      orderBy: { hour: 'desc' },
      take: 24,
    }) as Promise<StatisticsHourly[]>;
  }

  /**
   * Helper: Get recent logs for a service
   */
  private async getRecentLogs(service: string): Promise<LogEntry[]> {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

    return this.prisma.logEntry.findMany({
      where: {
        service,
        timestamp: { gte: oneHourAgo },
      },
      orderBy: { timestamp: 'desc' },
      take: 100,
    }) as Promise<LogEntry[]>;
  }

  /**
   * Helper: Get recent events for a service
   */
  private async getRecentEvents(service: string): Promise<ServiceEvent[]> {
    const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    return this.prisma.serviceEvent.findMany({
      where: {
        service,
        createdAt: { gte: dayAgo },
      },
      orderBy: { createdAt: 'desc' },
    }) as Promise<ServiceEvent[]>;
  }

  /**
   * Helper: Calculate trend (simple linear regression slope)
   * Positive = increasing, Negative = decreasing, 0 = stable
   */
  private calculateTrend(values: number[]): number {
    if (values.length < 2) return 0;

    const n = values.length;
    const indices = Array.from({ length: n }, (_, i) => i);

    const sumX = indices.reduce((a, b) => a + b, 0);
    const sumY = values.reduce((a, b) => a + b, 0);
    const sumXY = indices.reduce((sum, x, i) => sum + x * values[i], 0);
    const sumX2 = indices.reduce((sum, x) => sum + x * x, 0);

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);

    return slope;
  }

  /**
   * Helper: Update ServiceDailyStats model from daily aggregation
   */
  private async updateDailyStatsModel(): Promise<void> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dailyStats = (await this.prisma.statisticsDaily.findMany({
      where: { day: today },
    })) as StatisticsDaily[];

    await Promise.all(
      dailyStats.map((stat) =>
        this.prisma.serviceDailyStats.create({
          data: {
            service: stat.service,
            date: stat.day,
            avgCpu: stat.avgCpu,
            avgMemory: stat.avgMemory,
            failures: stat.failures,
            anomalies: stat.anomalyCount,
          },
        }),
      ),
    );
  }

  /**
   * Manual trigger for full pipeline (useful for testing)
   */
  async triggerManualRun(): Promise<void> {
    this.logger.log('🔧 Manual pipeline trigger');
    await this.runPipeline();
  }

  /**
   * Get latest statistics summary for all services
   */
  async getStatisticsSummary(): Promise<StatisticsSummary> {
    const [risks, predictions, dailyStats] = await Promise.all([
      this.prisma.serviceRisk.findMany({
        orderBy: { createdAt: 'desc' },
        take: 100,
      }) as Promise<ServiceRisk[]>,
      this.prisma.failurePrediction.findMany({
        orderBy: { createdAt: 'desc' },
        take: 100,
      }) as Promise<FailurePrediction[]>,
      this.prisma.serviceDailyStats.findMany({
        orderBy: { date: 'desc' },
        take: 100,
      }) as Promise<ServiceDailyStats[]>,
    ]);

    return { risks, predictions, dailyStats };
  }
}
