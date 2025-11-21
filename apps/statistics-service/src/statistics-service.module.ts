import { Module } from '@nestjs/common';
import { StatisticsServiceController } from './statistics-service.controller';
import { StatisticsService } from './statistics-service.service';
import { DatabaseModule } from '@app/database';
import { LoggerModule, PubSubModule } from '@app/common';
import { MetricsCollector } from './collectors/metrics.collector';
import { EventsCollector } from './collectors/events.collector';
import { LogsCollector } from './collectors/logs.collector';
import { HourlyAggregator } from './aggregators/hourly.aggregator';
import { DailyAggregator } from './aggregators/daily.aggregator';
import { RiskEngine } from './engines/risk.engine';
import { RCAEngine } from './engines/rca.engine';
import { FailurePredictor } from './engines/failure-predictor.engine';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    DatabaseModule,
    LoggerModule,
    PubSubModule,
  ],
  controllers: [StatisticsServiceController],
  providers: [
    StatisticsService,
    MetricsCollector,
    EventsCollector,
    LogsCollector,
    HourlyAggregator,
    DailyAggregator,
    RiskEngine,
    RCAEngine,
    FailurePredictor,
  ],
})
export class StatisticsServiceModule {}
