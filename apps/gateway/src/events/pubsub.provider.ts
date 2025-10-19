import { Provider } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import Redis from 'ioredis';

export const PUB_SUB = Symbol('PUB_SUB');

const options = {
  host: '127.0.0.1',
  port: 6379,
  retryStrategy: (times: number) => Math.min(times * 50, 2000),
};

export const PubSubProvider: Provider = {
  provide: PUB_SUB,
  useValue: new RedisPubSub({
    publisher: new Redis(options),
    subscriber: new Redis(options),
  }),
};
