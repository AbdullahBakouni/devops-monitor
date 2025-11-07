import { Module } from '@nestjs/common';
import { PubSubModule } from '@app/common';
import { AlertsResolver } from './alert.resolver';

@Module({
  imports: [PubSubModule],
  providers: [AlertsResolver],
})
export class AlertsGatewayModule {}
