import { Module } from '@nestjs/common';
import { EventsResolver } from './events.resolver';
import { EventsService } from './events.service';
import { DatabaseModule } from '@app/database';
import { PubSubProvider } from './pubsub.provider';

@Module({
  imports: [DatabaseModule],
  providers: [PubSubProvider, EventsResolver, EventsService],
  exports: [EventsService],
})
export class EventsModule {}
