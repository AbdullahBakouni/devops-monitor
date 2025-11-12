import { Module } from '@nestjs/common';
import { PubSubModule } from '@app/common';
import { LogResolver } from './app-logger.resolver';
import { LogServiceModule } from 'apps/log-service/src/log-service.module';

@Module({
  imports: [PubSubModule, LogServiceModule],
  providers: [LogResolver],
})
export class AppLoggerModule {}
