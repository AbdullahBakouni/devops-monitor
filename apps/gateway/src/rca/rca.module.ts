import { Module } from '@nestjs/common';
import { PubSubModule } from '@app/common';
import { DatabaseModule } from '@app/database';
import { RCAResolver } from './rca.resolver';

@Module({
  imports: [PubSubModule, DatabaseModule],
  providers: [RCAResolver],
})
export class RcaGatewayModule {}
