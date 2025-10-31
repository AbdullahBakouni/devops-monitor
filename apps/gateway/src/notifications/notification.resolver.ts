import {
  Resolver,
  Query,
  Subscription,
  ObjectType,
  Field,
} from '@nestjs/graphql';
import { Inject, Injectable } from '@nestjs/common';
import { DatabaseService } from '@app/database';
import { PUB_SUB } from '@app/common/pubsub/pubsub.provider';
import { RedisPubSub } from 'graphql-redis-subscriptions';

@ObjectType()
export class NotificationDTO {
  @Field() id: string;
  @Field() type: string;
  @Field() title: string;
  @Field() message: string;
  @Field() service: string;
  @Field({ nullable: true }) cluster?: string;
  @Field() createdAt: string;
}

@Injectable()
@Resolver(() => NotificationDTO)
export class NotificationResolver {
  constructor(
    private readonly prisma: DatabaseService,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
  ) {}

  @Query(() => [NotificationDTO])
  async getNotifications(): Promise<NotificationDTO[]> {
    const list = await this.prisma.notification.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    return list.map((n) => ({
      id: n.id,
      type: n.type,
      title: n.title,
      message: n.message,
      service: n.service,
      cluster: n.cluster ?? undefined,
      createdAt: n.createdAt.toISOString(),
    }));
  }

  @Subscription(() => NotificationDTO)
  notificationCreated() {
    return this.pubSub.asyncIterator('notificationCreated');
  }
}
