import { Module } from '@nestjs/common';
import { MetricsServiceController } from './metrics-service.controller';
import { MetricsService } from './metrics-service.service';
import { DatabaseModule } from '@app/database';
import { PubSubModule } from '@app/common';
import { DockerCollector } from './collectors/docker.collector';
import { K8sCollector } from './collectors/k8s.collerctor';
import { HttpModule } from '@nestjs/axios';
import { AnomalyDetector } from './ml/anomaly-detector';
import { ScheduleModule } from '@nestjs/schedule';
import { K8sMetricsUtil } from './collectors/utils/k8s-metrics.util';
import { ClusterDetector } from './collectors/cluster.collector';

@Module({
  imports: [ScheduleModule.forRoot(), DatabaseModule, PubSubModule, HttpModule],
  controllers: [MetricsServiceController],
  providers: [
    MetricsService,
    DockerCollector,
    K8sCollector,
    AnomalyDetector,
    ClusterDetector,
    K8sMetricsUtil,
  ],
})
export class MetricsServiceModule {}
