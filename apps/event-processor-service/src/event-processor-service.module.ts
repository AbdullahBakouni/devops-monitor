import { Module } from '@nestjs/common';
import { EventProcessorServiceController } from './event-processor-service.controller';
import { EventProcessorService } from './event-processor-service.service';
import { DatabaseModule } from '@app/database';
import { PubSubModule } from '@app/common';
import { NotificationServiceModule } from 'apps/notification-service/src/notification-service.module';

@Module({
  imports: [DatabaseModule, PubSubModule, NotificationServiceModule],
  controllers: [EventProcessorServiceController],
  providers: [EventProcessorService],
  exports: [EventProcessorService],
})
export class EventProcessorServiceModule {}
