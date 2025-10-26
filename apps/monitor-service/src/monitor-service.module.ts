import { Module } from '@nestjs/common';
import { MonitorServiceController } from './monitor-service.controller';
import { MonitorServiceService } from './monitor-service.service';
import { PubSubProvider } from './pubsub.provider';
import { DatabaseModule } from '@app/database';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { DockerK8sDiscoveryService } from './docker-k8s-discovery.service';
import { DiscoveryModule } from '@nestjs/core';
import { DockerRuntimeMonitorService } from './docker-runtime-monitor.service';
import { K8sRuntimeMonitorService } from './k8s-runtime-monitor.service';
@Module({
  imports: [
    HttpModule,
    ScheduleModule.forRoot(),
    DatabaseModule,
    DiscoveryModule,
  ],
  controllers: [MonitorServiceController],
  providers: [
    MonitorServiceService,
    PubSubProvider,
    DockerK8sDiscoveryService,
    DockerRuntimeMonitorService,
    K8sRuntimeMonitorService,
  ],
})
export class MonitorServiceModule {}
