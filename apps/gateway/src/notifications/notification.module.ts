import { Module } from '@nestjs/common';
import { NotificationResolver } from './notification.resolver';
import { PubSubModule } from '@app/common';
import { DatabaseModule } from '@app/database';

@Module({
  imports: [PubSubModule, DatabaseModule],
  providers: [NotificationResolver],
})
export class NotificationGatewayModule {}
