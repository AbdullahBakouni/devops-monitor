import { Module } from '@nestjs/common';
import { MetricsServiceController } from './metrics-service.controller';
import { MetricsServiceService } from './metrics-service.service';

@Module({
  imports: [],
  controllers: [MetricsServiceController],
  providers: [MetricsServiceService],
})
export class MetricsServiceModule {}
