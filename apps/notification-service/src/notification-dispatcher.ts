// notification-dispatcher.service.ts
import { Inject, Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from '@app/database';
import { HttpService } from '@nestjs/axios';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from '@app/common/pubsub/pubsub.provider';
import { KafkaLogger } from '@app/common/logging/kafka-logger.service';
import { LoggerFactory } from '@app/common/logging/logger.factory';
import { firstValueFrom } from 'rxjs';
import Redis from 'ioredis';
export interface DispatchableNotification {
  id?: string;
  type: string; // FAILURE | RECOVERY | CRASH_LOOP | INITIAL | ...
  title: string;
  message: string;
  service: string;
  cluster?: string | null;
  createdAt?: string | Date;
}

interface NotificationPolicy {
  channel: 'SLACK' | 'DISCORD' | 'EMAIL' | 'WEBHOOK';
  level: 'INFO' | 'WARNING' | 'CRITICAL';
  conditions: {
    eventType?: string[];
    clusterPrefix?: string; // مثل "k8s-" أو "docker"
  };
  target: string; // webhook URL أو email
}

@Injectable()
export class NotificationDispatcher {
  private readonly logger = new Logger(NotificationDispatcher.name);
  private readonly LOG_TOKEN = process.env.NOTIFICATION_SERVICE_TOKEN;
  private readonly notification_dispatcher_logger: KafkaLogger;
  private lastNotified = new Map<
    string,
    { status: string; message?: string }
  >();
  private policies: NotificationPolicy[] = [];
  private readonly redis: Redis;
  constructor(
    private readonly prisma: DatabaseService,
    private readonly http: HttpService,
    loggerFactory: LoggerFactory,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
  ) {
    this.loadPolicies();
    this.redis = new Redis({
      host: process.env.REDIS_HOST || '127.0.0.1',
      port: Number(process.env.REDIS_PORT || 6379),
    });
    this.notification_dispatcher_logger = loggerFactory.create(
      'NotificationDispatcher',
      'NotificationService',
      this.LOG_TOKEN,
    );
  }

  private loadPolicies() {
    this.policies = [
      {
        channel: 'SLACK',
        level: 'CRITICAL',
        conditions: { eventType: ['FAILURE', 'CRASH_LOOP'] },
        target: process.env.SLACK_WEBHOOK_URL ?? '',
      },
      {
        channel: 'DISCORD',
        level: 'WARNING',
        conditions: { eventType: ['RECOVERY'] },
        target: process.env.DISCORD_WEBHOOK_URL ?? '',
      },
    ];
  }

  async dispatch(event: {
    id: string;
    service: string;
    status: string;
    cluster: string;
    message?: string;
    eventType: string;
    createdAt: string;
  }): Promise<void> {
    const title =
      event.eventType === 'FAILURE'
        ? `❌ Service DOWN: ${event.service}`
        : event.eventType === 'RECOVERY'
          ? `✅ Service RECOVERED: ${event.service}`
          : event.eventType === 'CRASH_LOOP'
            ? `🔥 CrashLoop detected: ${event.service}`
            : `ℹ️ ${event.service} status: ${event.status}`;

    const messageText =
      event.message ||
      (event.status === 'DOWN'
        ? 'Service is not responding'
        : 'Service state changed');
    const dedupKey = `notif:${event.service}:${event.status}:${event.message || 'none'}`;
    const TTL_SECONDS = 90;
    const exists = await this.redis.exists(dedupKey);
    if (exists) {
      await this.notification_dispatcher_logger.debug(
        `🧊 Duplicate notification skipped (Redis key active): ${dedupKey}`,
      );
      return;
    }
    const previous = this.lastNotified.get(event.service);
    if (
      previous &&
      previous.status === event.status &&
      previous.message === event.message
    ) {
      await this.notification_dispatcher_logger.debug(
        `🔕 Skipping duplicate notification for ${event.service} (${event.status})`,
      );
      return;
    }
    const saved: DispatchableNotification =
      (await this.prisma.notification.create({
        data: {
          type: event.eventType,
          title,
          message: messageText,
          service: event.service,
          cluster: event.cluster,
        },
      })) as DispatchableNotification;

    // 2. بث إشعار GraphQL فوري
    const gqlPayload: DispatchableNotification = {
      id: saved.id,
      type: saved.type,
      title: saved.title,
      message: saved.message,
      service: saved.service,
      cluster: saved.cluster ?? undefined,
      createdAt: saved.createdAt?.toString(),
    };
    this.lastNotified.set(event.service, {
      status: event.status,
      message: event.message,
    });
    await this.redis.set(dedupKey, 'sent', 'EX', TTL_SECONDS);
    await this.pubSub.publish('notificationCreated', {
      notificationCreated: gqlPayload,
    });
    const matchedPolicies = this.matchPolicies(event);

    for (const policy of matchedPolicies) {
      await this.sendExternal(policy, gqlPayload);
    }

    await this.notification_dispatcher_logger.log(
      `🔔 Notification dispatched for ${event.service} [${event.eventType}]`,
    );
  }

  private matchPolicies(event: {
    eventType: string;
    cluster: string;
  }): NotificationPolicy[] {
    return this.policies.filter((policy) => {
      // match eventType
      if (
        policy.conditions.eventType &&
        !policy.conditions.eventType.includes(event.eventType)
      ) {
        return false;
      }

      // match cluster prefix if specified
      if (policy.conditions.clusterPrefix) {
        if (!event.cluster?.startsWith(policy.conditions.clusterPrefix)) {
          return false;
        }
      }

      return true;
    });
  }

  private async sendExternal(
    policy: NotificationPolicy,
    notification: DispatchableNotification,
  ): Promise<void> {
    if (!policy.target) {
      this.logger.warn(
        `⚠️ Policy ${policy.channel} has no target URL/endpoint configured`,
      );
      return;
    }

    if (policy.channel === 'SLACK' || policy.channel === 'DISCORD') {
      // Slack & Discord Webhook payloads are very similar
      const payload = {
        text: `[${notification.type}] ${notification.title}\n${notification.message}\nservice=${notification.service} cluster=${notification.cluster}`,
      };

      try {
        await firstValueFrom(this.http.post(policy.target, payload));
        await this.notification_dispatcher_logger.log(
          `📤 Sent ${policy.channel} alert for ${notification.service}`,
        );
      } catch (err) {
        await this.notification_dispatcher_logger.error(
          `❌ Failed to send ${policy.channel} alert: ${(err as Error).message}`,
        );
      }
    }
  }
}
