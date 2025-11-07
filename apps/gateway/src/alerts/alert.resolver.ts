import { Resolver, Subscription } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from '@app/common/pubsub/pubsub.provider';
import { MetricsAlertDTO } from './dto/metrics-alerts';

@Resolver()
export class AlertsResolver {
  constructor(@Inject(PUB_SUB) private readonly pubSub: RedisPubSub) {}

  @Subscription(() => MetricsAlertDTO, {
    name: 'metricsAlert',
    resolve: (payload: { metricsAlert: MetricsAlertDTO }) =>
      payload.metricsAlert,
  })
  metricsAlert() {
    return this.pubSub.asyncIterator('metricsAlert');
  }
}
