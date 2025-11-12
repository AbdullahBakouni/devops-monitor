import { Injectable, Logger, Inject, forwardRef } from '@nestjs/common';
import { DatabaseService } from '@app/database';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from '@app/common/pubsub/pubsub.provider';
import { NotificationDispatcher } from 'apps/notification-service/src/notification-dispatcher';
import { EventType, ServiceEvent, Prisma } from '@app/database/prisma';
import { KafkaLogger } from '@app/common/logging/kafka-logger.service';
import { LoggerFactory } from '@app/common/logging/logger.factory';
export interface IncomingRuntimeEvent {
  service: string;
  status: string;
  cluster: string;
  message: string;
}

export interface ProcessedServiceEvent {
  id: string;
  service: string;
  status: string;
  cluster: string;
  message?: string;
  eventType: EventType;
  createdAt: string;
}

@Injectable()
export class EventProcessorService {
  private readonly logger = new Logger(EventProcessorService.name);
  private readonly LOG_TOKEN = process.env.EVENTS_SERVICE_TOKEN;
  private readonly events_logger: KafkaLogger;
  constructor(
    private readonly prisma: DatabaseService,
    loggerFactory: LoggerFactory,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
    @Inject(forwardRef(() => NotificationDispatcher))
    private readonly dispatcher: NotificationDispatcher,
  ) {
    this.events_logger = loggerFactory.create(
      'EventProcessorService',
      'EventProcessorService',
      this.LOG_TOKEN,
    );
  }

  async handleRuntimeStatus(event: IncomingRuntimeEvent): Promise<void> {
    const { service, status, cluster, message } = event;
    const now = new Date();

    await this.events_logger.debug(
      `⚙️ Processing runtime event for ${service}: ${status}`,
    );

    const lastEvent = await this.prisma.serviceEvent.findFirst({
      where: { service },
      orderBy: { createdAt: 'desc' },
    });

    const isFirst = !lastEvent;
    const msSinceLast = lastEvent
      ? now.getTime() - lastEvent.createdAt.getTime()
      : Number.POSITIVE_INFINITY;
    const eventType = this.classifyEventType({
      lastStatus: lastEvent?.status,
      lastMessage: lastEvent?.message,
      newStatus: status,
      newMessage: message,
      msSinceLast,
    });

    const noisy = this.isNoise({
      eventType,
      msSinceLast,
      lastStatus: lastEvent?.status,
      newStatus: status,
    });
    await this.events_logger.debug(
      `🧩 Noise check for ${service}: eventType=${eventType}, msSinceLast=${msSinceLast}, result=${noisy}`,
    );

    if (noisy) {
      await this.events_logger.debug(
        `🔕 Ignoring noisy event for ${service} (${status}, type=${eventType})`,
      );

      await this.prisma.service.updateMany({
        where: { name: service },
        data: { lastSeenAt: now },
      });

      return;
    }
    const hasChanged =
      isFirst ||
      lastEvent.status !== status ||
      (lastEvent.message ?? '') !== (message ?? '');
    const COOLDOWN_MS = 45_000;
    const withinCooldown = msSinceLast < COOLDOWN_MS;

    if (!hasChanged || withinCooldown) {
      await this.events_logger.debug(
        withinCooldown
          ? `🕒 Cooldown active for ${service} (${msSinceLast}ms < ${COOLDOWN_MS}ms)`
          : `⏭️ No change for ${service} (${status}) — skipping event.`,
      );
      await this.prisma.service.updateMany({
        where: { name: service },
        data: { lastSeenAt: now },
      });
      return;
    }
    const created: ServiceEvent = await this.prisma.$transaction(
      async (tx: Prisma.TransactionClient) => {
        await tx.service.updateMany({
          where: { name: service },
          data: {
            runtimeStatus: status,
            lastReason: message,
            lastSeenAt: now,
          },
        });

        const existingEvent = await tx.serviceEvent.findFirst({
          where: { service },
        });

        let ev: ServiceEvent;

        if (existingEvent) {
          await tx.serviceEventHistory.create({
            data: {
              service: existingEvent.service,
              status: existingEvent.status,
              cluster: existingEvent.cluster,
              message: existingEvent.message,
              eventType: existingEvent.eventType,
              recordedAt: new Date(),
            },
          });

          ev = await tx.serviceEvent.update({
            where: { id: existingEvent.id },
            data: { status, cluster, message, eventType, createdAt: now },
          });
        } else {
          ev = await tx.serviceEvent.create({
            data: {
              service,
              status,
              cluster,
              message,
              eventType,
              createdAt: now,
            },
          });
        }

        return ev;
      },
    );

    // 🧠 نشر الحدث في GraphQL subscriptions
    const processed: ProcessedServiceEvent = {
      id: created.id,
      service: created.service,
      status: created.status,
      cluster: created.cluster ?? '',
      message: created.message ?? undefined,
      eventType: created.eventType,
      createdAt: created.createdAt.toISOString(),
    };

    await this.pubSub.publish('serviceEventCreated', {
      serviceEventCreated: processed,
    });

    await this.events_logger.log(
      `📡 [${processed.eventType}] ${processed.service} -> ${processed.status} (${processed.message ?? 'no message'})`,
    );

    await this.dispatcher.dispatch(processed);
  }

  private classifyEventType(args: {
    lastStatus?: string;
    lastMessage?: string | null;
    newStatus: string;
    newMessage: string;
    msSinceLast: number;
  }): EventType {
    const { lastStatus, newStatus, newMessage, lastMessage, msSinceLast } =
      args;

    if (!lastStatus) return EventType.INITIAL;

    if (
      lastStatus === 'RESTARTING' &&
      newStatus === 'DOWN' &&
      msSinceLast < 60_000
    )
      return EventType.CRASH_LOOP;

    if (lastStatus !== 'DOWN' && newStatus === 'DOWN') return EventType.FAILURE;
    if (lastStatus === 'DOWN' && newStatus === 'UP') return EventType.RECOVERY;
    if (lastStatus === newStatus && (lastMessage || '') !== newMessage)
      return EventType.STATUS_CHANGE;
    if (lastStatus !== newStatus) return EventType.STATUS_CHANGE;

    return EventType.INITIAL;
  }

  private isNoise(args: {
    eventType: EventType;
    msSinceLast: number;
    lastStatus?: string;
    newStatus: string;
  }): boolean {
    const { eventType, msSinceLast, lastStatus, newStatus } = args;

    // ❌ Ignore only purely repetitive INITIAL events (first scans)
    if (eventType === EventType.INITIAL && msSinceLast < 5000) {
      return true;
    }

    // 🕒 Very short flaps (UP ↔ DOWN within 3s) are considered noise
    if (
      (lastStatus === 'UP' && newStatus === 'DOWN') ||
      (lastStatus === 'DOWN' && newStatus === 'UP')
    ) {
      if (msSinceLast < 3000) return true;
    }

    // 🧠 Otherwise, treat as valid change
    return false;
  }
}
