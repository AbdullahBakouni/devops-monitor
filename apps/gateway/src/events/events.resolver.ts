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

@ObjectType()
export class ServiceEvent {
  @Field() id?: string;
  @Field() service: string;
  @Field() status: string;
  @Field() cluster: string;
  @Field(() => String, { nullable: true }) message?: string;
  @Field() createdAt?: string;
}
@InputType()
export class CreateServiceEventInput {
  @Field() service: string;
  @Field() status: string;
  @Field() cluster: string;
  @Field(() => String, { nullable: true }) message?: string;
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

  @Subscription(() => ServiceEvent)
  serviceEventCreated() {
    return this.pubSub.asyncIterator('serviceEventCreated');
  }
  @Mutation(() => ServiceEvent)
  async createServiceEvent(
    @Args('service') service: string,
    @Args('status') status: string,
    @Args('cluster') cluster: string,
    @Args('message', { nullable: true }) message?: string,
  ): Promise<ServiceEvent> {
    return this.eventsService.createEvent({
      service,
      status,
      cluster,
      message,
    });
  }

  publishNewEvent(event: ServiceEvent) {
    void this.pubSub.publish('serviceEventCreated', {
      serviceEventCreated: event,
    });
  }
}
