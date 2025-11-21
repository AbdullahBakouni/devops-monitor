import { Module } from '@nestjs/common';
import { PubSubModule } from '@app/common';
import { DatabaseModule } from '@app/database';
import { RiskResolver } from './risk.resolver';

@Module({
  imports: [PubSubModule, DatabaseModule],
  providers: [RiskResolver],
})
export class RisksGatewayModule {}
