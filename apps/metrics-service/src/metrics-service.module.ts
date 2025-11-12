import { Module } from '@nestjs/common';
import { MetricsServiceController } from './metrics-service.controller';
import { MetricsService } from './metrics-service.service';
import { DatabaseModule } from '@app/database';
import { LoggerModule, PubSubModule } from '@app/common';
import { DockerCollector } from './collectors/docker.collector';
import { K8sCollector } from './collectors/k8s.collerctor';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { K8sMetricsUtil } from './collectors/utils/k8s-metrics.util';
import { ClusterDetector } from './collectors/cluster.collector';
import {
  AnomalyDetectorOptions,
  AnomalyDetectorV2,
} from './ml/anomaly-detector-v2';
import { ANOMALY_DETECTOR_OPTIONS } from './ml/anomaly-detector.constants';
@Module({
  imports: [
    ScheduleModule.forRoot(),
    DatabaseModule,
    PubSubModule,
    HttpModule,
    LoggerModule,
  ],
  controllers: [MetricsServiceController],
  providers: [
    MetricsService,
    DockerCollector,
    K8sCollector,
    {
      provide: ANOMALY_DETECTOR_OPTIONS,
      useValue: {
        // Provide default options
        alphaMean: 0.12,
        alphaVar: 0.12,
        iqrMultiplier: 2.5,
        zThreshold: 3.0,
        enableSeasonality: true,
        minWarmup: 20,
        scoreIncrease: 1.0,
        scoreDecay: 0.2,
        minIntervalMs: 90_000,
      } as AnomalyDetectorOptions, // Type assertion
    },
    AnomalyDetectorV2,
    ClusterDetector,
    K8sMetricsUtil,
  ],
})
export class MetricsServiceModule {}
