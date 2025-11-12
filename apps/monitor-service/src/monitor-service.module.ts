import { Module } from '@nestjs/common';
import { MonitorServiceController } from './monitor-service.controller';
import { MonitorServiceService } from './monitor-service.service';
import { DatabaseModule } from '@app/database';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { DockerK8sDiscoveryService } from './docker-k8s-discovery.service';
import { DiscoveryModule } from '@nestjs/core';
import { DockerRuntimeMonitorService } from './docker-runtime-monitor.service';
import { K8sRuntimeMonitorService } from './k8s-runtime-monitor.service';
import { LoggerModule, PubSubModule } from '@app/common';
import { NotificationServiceModule } from 'apps/notification-service/src/notification-service.module';
import { EventProcessorServiceModule } from 'apps/event-processor-service/src/event-processor-service.module';
import { ServiceEventHistoryService } from './service-event-history.service';
@Module({
  imports: [
    HttpModule,
    ScheduleModule.forRoot(),
    DatabaseModule,
    DiscoveryModule,
    PubSubModule,
    LoggerModule,
    NotificationServiceModule,
    EventProcessorServiceModule,
  ],
  controllers: [MonitorServiceController],
  providers: [
    MonitorServiceService,
    DockerK8sDiscoveryService,
    DockerRuntimeMonitorService,
    K8sRuntimeMonitorService,
    ServiceEventHistoryService,
  ],
})
export class MonitorServiceModule {}
