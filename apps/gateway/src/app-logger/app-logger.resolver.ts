import { Resolver, Query, Args, Subscription } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from '@app/common/pubsub/pubsub.provider';
import { LogEntryDTO, LogSearchFilter, LogSearchResult } from './dto/log.types';
import { LogService } from 'apps/log-service/src/log-service.service';

@Resolver(() => LogEntryDTO)
export class LogResolver {
  constructor(
    private readonly logs: LogService,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
  ) {}

  @Query(() => LogSearchResult)
  searchLogs(
    @Args('filter', { type: () => LogSearchFilter, nullable: true })
    filter?: LogSearchFilter,
  ): Promise<LogSearchResult> {
    return this.logs.search(filter ?? {});
  }

  @Subscription(() => LogEntryDTO)
  logCreated() {
    return this.pubSub.asyncIterator('logCreated');
  }
}
