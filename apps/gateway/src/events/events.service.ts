import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { ServiceEvent, EventsResolver } from './events.resolver';
import { DatabaseService } from '@app/database';
interface ServiceEventData {
  id: string;
  service: string;
  status: string;
  cluster: string;
  message?: string;
  createdAt: string;
}
@Injectable()
export class EventsService {
  constructor(
    private readonly db: DatabaseService,
    @Inject(forwardRef(() => EventsResolver))
    private readonly eventsResolver: EventsResolver,
  ) {}

  async getAllEvents(): Promise<ServiceEventData[]> {
    const events = await this.db.serviceEvent.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    // Convert to ISO string format
    return events.map((event) => ({
      id: event.id,
      service: event.service,
      status: event.status,
      cluster: event.cluster || '',
      message: event.message ?? undefined,
      createdAt: new Date(event.createdAt as any).toISOString(),
    }));
  }
  async createEvent(event: ServiceEvent): Promise<ServiceEvent> {
    const newEvent = await this.db.serviceEvent.create({
      data: event,
    });
    const formattedEvent: ServiceEventData = {
      id: newEvent.id || '',
      service: newEvent.service,
      status: newEvent.status,
      cluster: newEvent.cluster || '',
      message: event.message ?? undefined,
      createdAt: new Date(newEvent.createdAt as any).toISOString(),
    };
    this.eventsResolver.publishNewEvent(formattedEvent);
    return formattedEvent;
  }
}
