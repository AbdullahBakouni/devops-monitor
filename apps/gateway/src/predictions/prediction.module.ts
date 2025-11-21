import { Module } from '@nestjs/common';
import { PubSubModule } from '@app/common';
import { DatabaseModule } from '@app/database';
import { PredictionResolver } from './prediction.resolver';

@Module({
  imports: [PubSubModule, DatabaseModule],
  providers: [PredictionResolver],
})
export class PredictionsGatewayModule {}
