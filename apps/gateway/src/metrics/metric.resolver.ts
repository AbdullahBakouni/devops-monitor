import {
  Resolver,
  Subscription,
  ObjectType,
  Field,
  Float,
} from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from '@app/common/pubsub/pubsub.provider';

@ObjectType()
export class MetricsDTO {
  @Field()
  service: string;

  @Field(() => Float)
  cpuUsage: number;

  @Field(() => Float)
  memoryUsage: number;

  @Field(() => Float)
  networkRx: number;

  @Field(() => Float)
  networkTx: number;

  @Field()
  status: string;

  @Field()
  source: string;

  @Field()
  timestamp: string;
}

@Resolver()
export class MetricsResolver {
  constructor(@Inject(PUB_SUB) private readonly pubSub: RedisPubSub) {}

  @Subscription(() => MetricsDTO, {
    resolve: (payload: { metricsUpdated: MetricsDTO }) =>
      payload.metricsUpdated,
  })
  metricsUpdated() {
    return this.pubSub.asyncIterator('metricsUpdated');
  }
}
