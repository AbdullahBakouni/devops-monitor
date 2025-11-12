import { Module } from '@nestjs/common';
import { NotificationServiceController } from './notification-service.controller';
import { NotificationServiceService } from './notification-service.service';
import { DatabaseModule } from '@app/database';
import { LoggerModule, PubSubModule } from '@app/common';
import { NotificationDispatcher } from './notification-dispatcher';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [DatabaseModule, PubSubModule, HttpModule, LoggerModule],
  controllers: [NotificationServiceController],
  providers: [NotificationServiceService, NotificationDispatcher],
  exports: [NotificationDispatcher],
})
export class NotificationServiceModule {}
