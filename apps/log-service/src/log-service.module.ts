import { Module } from '@nestjs/common';
import { LogServiceController } from './log-service.controller';
import { LogService } from './log-service.service';
import { KafkaModule, PubSubModule } from '@app/common';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { DatabaseModule } from '@app/database';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    PubSubModule,
    HttpModule,
    DatabaseModule,
    KafkaModule,
  ],
  controllers: [LogServiceController],
  providers: [LogService],
  exports: [LogService],
})
export class LogServiceModule {}
