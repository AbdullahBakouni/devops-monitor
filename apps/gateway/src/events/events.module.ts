import { Module } from '@nestjs/common';
import { EventsResolver } from './events.resolver';
import { EventsService } from './events.service';
import { DatabaseModule } from '@app/database';
import { PubSubModule } from '@app/common';

@Module({
  imports: [DatabaseModule, PubSubModule],
  providers: [EventsResolver, EventsService],
  exports: [EventsService],
})
export class EventsModule {}
