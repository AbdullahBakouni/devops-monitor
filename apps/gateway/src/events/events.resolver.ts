import {
  Resolver,
  Query,
  Subscription,
  ObjectType,
  Field,
  Mutation,
  InputType,
  Args,
} from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { EventsService } from './events.service';
import { PUB_SUB } from './pubsub.provider';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { withFilter } from 'graphql-subscriptions';
@ObjectType()
export class ServiceEvent {
  @Field() id?: string;
  @Field() service: string;
  @Field() status: string;
  @Field() cluster: string;
  @Field(() => String, { nullable: true }) message?: string;
  @Field(() => String) eventType: string;
  @Field() createdAt?: string;
}
@InputType()
export class CreateServiceEventInput {
  @Field() service: string;
  @Field() status: string;
  @Field() cluster: string;
  @Field(() => String, { nullable: true }) message?: string;
}
interface ServiceEventCreatedPayload {
  serviceEventCreated: ServiceEvent;
}
@Resolver(() => ServiceEvent)
export class EventsResolver {
  constructor(
    private readonly eventsService: EventsService,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
  ) {}

  @Query(() => [ServiceEvent])
  async getServiceEvents(): Promise<ServiceEvent[]> {
    return this.eventsService.getAllEvents();
  }

  @Subscription(() => ServiceEvent, {
    resolve: (payload: ServiceEventCreatedPayload) =>
      payload.serviceEventCreated,
  })
  serviceEventCreated(
    @Args('service', { type: () => String, nullable: true }) service?: string,
    @Args('status', { type: () => String, nullable: true }) status?: string,
  ) {
    return withFilter(
      () => this.pubSub.asyncIterator('serviceEventCreated'),
      (payload: { serviceEventCreated: ServiceEvent }) => {
        const event = payload.serviceEventCreated;
        if (service && event.service !== service) return false;
        if (status && event.status !== status) return false;

        return true;
      },
    )();
  }
  @Mutation(() => ServiceEvent)
  async createServiceEvent(
    @Args('service') service: string,
    @Args('status') status: string,
    @Args('cluster') cluster: string,
    @Args('eventType') eventType: string, // Added eventType as an argument
    @Args('message', { nullable: true }) message?: string,
  ): Promise<ServiceEvent> {
    return this.eventsService.createEvent({
      service,
      status,
      cluster,
      message,
      eventType,
    });
  }

  publishNewEvent(event: ServiceEvent) {
    void this.pubSub.publish('serviceEventCreated', {
      serviceEventCreated: event,
    });
  }
}
