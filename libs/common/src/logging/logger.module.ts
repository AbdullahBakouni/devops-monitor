import { Module, Global } from '@nestjs/common';
import { KafkaLogger } from './kafka-logger.service';
import { KafkaModule } from '../kafka/kafka.module';
import { LoggerFactory } from './logger.factory';

@Global()
@Module({
  imports: [KafkaModule],
  providers: [KafkaLogger, LoggerFactory],
  exports: [KafkaLogger, LoggerFactory],
})
export class LoggerModule {}
