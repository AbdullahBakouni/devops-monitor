import { Module } from '@nestjs/common';
import { MetricsResolver } from './metric.resolver';
import { PubSubModule } from '@app/common';

@Module({
  imports: [PubSubModule],
  providers: [MetricsResolver],
})
export class GatewayMetricsModule {}
