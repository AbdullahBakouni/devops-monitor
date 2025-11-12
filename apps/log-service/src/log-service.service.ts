import { Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from '@app/database';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from '@app/common/pubsub/pubsub.provider';
import { Inject } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Prisma } from '@app/database/prisma';
import { KafkaService } from '@app/common/kafka/kafka.service';
import { Consumer, EachMessagePayload } from 'kafkajs';
import * as crypto from 'crypto';

interface IngestItem {
  service?: string;
  level?: string;
  message: string;
  context?: Prisma.JsonValue;
  traceId?: string;
  spanId?: string;
  host?: string;
  source?: string;
  pod?: string;
  namespace?: string;
  image?: string;
  ts?: Date;
}

// Define the structure for log creation publication
interface LogCreatedPayload {
  id: string;
  service: string;
  level: string;
  message: string;
  traceId?: string;
  spanId?: string;
  host?: string;
  source?: string;
  pod?: string;
  namespace?: string;
  image?: string;
  timestamp: string;
}

// Define raw input type for normalization
interface RawLogInput {
  message?: unknown;
  context?: unknown;
  service?: unknown;
  level?: unknown;
  ts?: unknown;
  timestamp?: unknown;
  traceId?: unknown;
  spanId?: unknown;
  host?: unknown;
  source?: unknown;
  pod?: unknown;
  namespace?: unknown;
  image?: unknown;
}

// Define search arguments interface
interface SearchArgs {
  service?: string;
  level?: string;
  q?: string;
  from?: string;
  to?: string;
  cursor?: string;
  limit?: number;
}

// Define search result item interface
interface SearchResultItem {
  id: string;
  service: string;
  level: string;
  message: string;
  context: Prisma.JsonValue;
  traceId?: string;
  spanId?: string;
  host?: string;
  source?: string;
  pod?: string;
  namespace?: string;
  image?: string;
  timestamp: string;
}

@Injectable()
export class LogService {
  private readonly logger = new Logger(LogService.name);
  private consumer: Consumer | null = null;
  private recentLogsCache = new Map<string, number>(); // key -> timestamp
  private readonly DEDUP_WINDOW_MS = 600000; // 10 minutes deduplication window
  constructor(
    private readonly prisma: DatabaseService,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
    private readonly kafkaService: KafkaService,
  ) {}

  async onModuleInit() {
    // Only set up Kafka consumer if Kafka is connected
    if (!this.kafkaService.isKafkaConnected()) {
      this.logger.warn('⚠️  Kafka consumer not started - Kafka unavailable');
      return;
    }

    this.consumer = this.kafkaService.createConsumer('log-service-group');

    if (!this.consumer) {
      this.logger.warn('⚠️  Could not create Kafka consumer');
      return;
    }

    try {
      await this.consumer.connect();

      const logsTopic = process.env.LOGS_TOPIC ?? 'logs';
      await this.consumer.subscribe({ topic: logsTopic, fromBeginning: false });

      await this.consumer.run({
        eachMessage: async (payload: EachMessagePayload) => {
          await this.handleKafkaMessage(payload);
        },
      });

      this.logger.log(
        `✅ Kafka consumer connected and listening to topic: ${logsTopic}`,
      );
    } catch (error) {
      this.logger.error('Failed to start Kafka consumer:', error);
    }
  }

  async onModuleDestroy() {
    if (this.consumer) {
      await this.consumer.disconnect();
      this.logger.log('Kafka consumer disconnected');
    }
  }

  private async handleKafkaMessage(payload: EachMessagePayload) {
    const { message } = payload;

    try {
      const value = message.value?.toString();
      if (!value) {
        this.logger.warn('Received empty Kafka message');
        return;
      }

      const parsedMessage: unknown = JSON.parse(value);

      // Extract token if it exists in the message
      let token: string | undefined;
      let body: unknown = parsedMessage;

      if (this.isJsonObject(parsedMessage) && 'token' in parsedMessage) {
        token =
          typeof parsedMessage.token === 'string'
            ? parsedMessage.token
            : undefined;
        body = 'logs' in parsedMessage ? parsedMessage.logs : parsedMessage;
      }

      await this.ingest(token, body);
    } catch (error) {
      this.logger.error('Error processing Kafka message:', error);
      // Optionally: send to dead letter queue or retry logic
    }
  }
  // Type guard to check if value is a JSON object
  private isJsonObject(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }
  private normalize(raw: RawLogInput, fallbackService?: string): IngestItem {
    let message = raw.message ?? '';
    let context: Prisma.JsonValue | undefined = undefined;

    // Handle context - try to parse strings as JSON
    if (raw.context !== undefined && raw.context !== null) {
      if (typeof raw.context === 'string') {
        // Try to parse string context as JSON
        try {
          const parsed: unknown = JSON.parse(raw.context);
          // Verify it's a valid JSON structure
          if (
            this.isJsonObject(parsed) ||
            Array.isArray(parsed) ||
            typeof parsed === 'number' ||
            typeof parsed === 'boolean'
          ) {
            context = parsed as Prisma.JsonValue;
          } else {
            // If parsed to a simple string, wrap it in an object
            context = { value: raw.context } as Prisma.JsonValue;
          }
        } catch {
          // If parsing fails, wrap the string in an object
          context = { value: raw.context } as Prisma.JsonValue;
        }
      } else if (
        this.isJsonObject(raw.context) ||
        Array.isArray(raw.context) ||
        typeof raw.context === 'number' ||
        typeof raw.context === 'boolean'
      ) {
        context = raw.context as Prisma.JsonValue;
      }
    }

    // Try auto-JSON if message is stringified JSON
    if (typeof message === 'string') {
      try {
        const parsed: unknown = JSON.parse(message);
        // if parsed looks like structured log
        if (this.isJsonObject(parsed) && 'msg' in parsed) {
          message = parsed.msg as string;
          // Merge with existing context
          const existingContext = this.isJsonObject(context)
            ? { ...context }
            : {};
          context = { ...existingContext, ...parsed } as Prisma.JsonValue;
        }
      } catch {
        // Keep as string if parsing fails
      }
    }

    // Ensure timestamp is a Date object
    const tsVal = raw.ts ?? raw.timestamp ?? Date.now();
    const ts =
      tsVal instanceof Date ? tsVal : new Date(tsVal as string | number);

    return {
      service:
        typeof raw.service === 'string'
          ? raw.service
          : (fallbackService ?? 'unknown'),
      level: this.toSafeString(raw.level, 'info').toLowerCase(),
      message: this.toSafeString(message, ''),
      context,
      traceId: typeof raw.traceId === 'string' ? raw.traceId : undefined,
      spanId: typeof raw.spanId === 'string' ? raw.spanId : undefined,
      host: typeof raw.host === 'string' ? raw.host : undefined,
      source: typeof raw.source === 'string' ? raw.source : undefined,
      pod: typeof raw.pod === 'string' ? raw.pod : undefined,
      namespace: typeof raw.namespace === 'string' ? raw.namespace : undefined,
      image: typeof raw.image === 'string' ? raw.image : undefined,
      ts,
    };
  }

  private async validateToken(token?: string): Promise<string | undefined> {
    if (!token) return undefined;
    const envTokens = Object.entries(process.env)
      .filter(([key]) => key.endsWith('_SERVICE_TOKEN'))
      .map(([key, value]) => ({
        service: key.replace('_SERVICE_TOKEN', '').toLowerCase(), // مثال: API → api
        token: value,
      }));

    const envMatch = envTokens.find((t) => t.token === token);
    const dbMatch = await this.prisma.logIngestionToken.findUnique({
      where: { token },
    });
    if (envMatch && dbMatch) {
      return dbMatch.service;
    }
    if (envMatch && !dbMatch) {
      await this.prisma.logIngestionToken.create({
        data: {
          token,
          service: envMatch.service,
          active: true,
        },
      });
      this.logger.warn(
        `🔑 Auto-registered log token for service: ${envMatch.service}`,
      );
      return envMatch.service;
    }
    if (!envMatch && dbMatch) {
      this.logger.error(
        `🚫 Rejecting token not defined in env (possible spoof): ${token}`,
      );
      return undefined;
    }
    this.logger.warn(`❌ Unknown log token, ignoring request`);
    return undefined;
  }

  // Ingest single or batch
  async ingest(token: string | undefined, body: unknown): Promise<void> {
    const fallbackService = await this.validateToken(token);
    const items = Array.isArray(body) ? body : [body];

    const normalizedItems: IngestItem[] = items.map((item) =>
      this.normalize(item as RawLogInput, fallbackService),
    );

    const validItems = normalizedItems.filter(
      (item) => item.service !== 'unknown',
    );

    if (validItems.length === 0) {
      this.logger.warn(
        'No valid logs ingested: all items lacked a service or token.',
      );
      return;
    }

    try {
      // Clean up old entries from cache (older than dedup window)
      this.cleanupCache();

      // Deduplicate logs using the cache (across batches)
      const uniqueLogs = this.deduplicateLogsWithCache(validItems);

      // Limit to last 5 logs to avoid flooding
      const logsToPublish = uniqueLogs.slice(0, Math.min(5, uniqueLogs.length));
      // Broadcast unique logs to real-time subscribers
      await Promise.all(
        logsToPublish.map(async (log) => {
          const payload: LogCreatedPayload = {
            id: this.generateLogId(log), // Generate a temporary ID
            service: log.service!,
            level: log.level!,
            message: log.message,
            traceId: log.traceId,
            spanId: log.spanId,
            host: log.host,
            source: log.source,
            pod: log.pod,
            namespace: log.namespace,
            image: log.image,
            timestamp: log.ts!.toISOString(),
          };

          await this.pubSub.publish('logCreated', { logCreated: payload });
        }),
      );

      this.logger.log(
        `🧾 Processed ${validItems.length} log(s), broadcasted ${logsToPublish.length} unique log(s)`,
      );
    } catch (error) {
      this.logger.error('Error during log ingestion:', error);
      throw error;
    }
  }
  /**
   * Deduplicates logs using a time-based cache
   * Prevents the same log (message + level + service) from being broadcast
   * multiple times within the deduplication window
   */
  private deduplicateLogsWithCache(logs: IngestItem[]): IngestItem[] {
    const uniqueLogs: IngestItem[] = [];
    const now = Date.now();

    for (const log of logs) {
      // Create a unique key based on message, level, and service
      const key = `${log.message}|${log.level}|${log.service}`;

      const lastSeen = this.recentLogsCache.get(key);

      // Only include if we haven't seen this log recently (within dedup window)
      if (!lastSeen || now - lastSeen > this.DEDUP_WINDOW_MS) {
        uniqueLogs.push(log);
        this.recentLogsCache.set(key, now);
      } else {
        this.logger.debug(
          `Skipping duplicate log: ${log.service} - ${log.message}`,
        );
      }
    }

    // Return logs sorted by timestamp (most recent first)
    return uniqueLogs.sort((a, b) => {
      if (!a.ts || !b.ts) return 0;
      return b.ts.getTime() - a.ts.getTime();
    });
  }

  /**
   * Removes old entries from the cache
   * Keeps cache size manageable
   */
  private cleanupCache(): void {
    const now = Date.now();
    const keysToDelete: string[] = [];

    for (const [key, timestamp] of this.recentLogsCache.entries()) {
      if (now - timestamp > this.DEDUP_WINDOW_MS) {
        keysToDelete.push(key);
      }
    }

    for (const key of keysToDelete) {
      this.recentLogsCache.delete(key);
    }

    if (keysToDelete.length > 0) {
      this.logger.debug(
        `Cleaned up ${keysToDelete.length} expired cache entries`,
      );
    }
  }

  /**
   * Generates a unique ID for a log entry (for streaming purposes)
   */
  private generateLogId(log: IngestItem): string {
    const idInput = `${log.service}:${log.message}:${log.ts?.getTime()}:${log.traceId ?? ''}`;
    return crypto
      .createHash('sha256')
      .update(idInput)
      .digest('hex')
      .substring(0, 16);
  }
  // GraphQL search
  async search(
    args: SearchArgs,
  ): Promise<{ items: SearchResultItem[]; nextCursor: string | undefined }> {
    const { service, level, q, from, to, cursor, limit = 50 } = args;

    const where: Prisma.LogEntryWhereInput = {};
    if (service) where.service = service;
    if (level) where.level = level;

    if (from || to) {
      where.timestamp = {};
      if (from) {
        const fromDate = new Date(from);
        if (!isNaN(fromDate.getTime())) {
          where.timestamp.gte = fromDate;
        } else {
          this.logger.warn(`Invalid 'from' date provided: ${from}`);
        }
      }
      if (to) {
        const toDate = new Date(to);
        if (!isNaN(toDate.getTime())) {
          where.timestamp.lte = toDate;
        } else {
          this.logger.warn(`Invalid 'to' date provided: ${to}`);
        }
      }
    }

    if (q) {
      where.OR = [{ message: { contains: q, mode: 'insensitive' } }];
    }

    const take = Math.min(Math.max(1, limit), 200);
    const cursorObj = cursor ? { id: cursor } : undefined;

    try {
      const rows = await this.prisma.logEntry.findMany({
        where,
        take,
        ...(cursorObj ? { skip: 1, cursor: cursorObj } : {}),
        orderBy: { timestamp: 'desc' },
      });

      const nextCursor =
        rows.length === take ? rows[rows.length - 1].id : undefined;

      const items: SearchResultItem[] = rows.map((r) => ({
        id: r.id,
        service: r.service,
        level: r.level,
        message: r.message,
        context: r.context,
        traceId: r.traceId ?? undefined,
        spanId: r.spanId ?? undefined,
        host: r.host ?? undefined,
        source: r.source ?? undefined,
        pod: r.pod ?? undefined,
        namespace: r.namespace ?? undefined,
        image: r.image ?? undefined,
        timestamp: r.timestamp.toISOString(),
      }));

      return {
        items,
        nextCursor,
      };
    } catch (error) {
      this.logger.error('Error searching logs:', error);
      throw error;
    }
  }
  private toSafeString(value: unknown, fallback = ''): string {
    if (value === null || value === undefined) return fallback;
    if (typeof value === 'string') return value;
    if (typeof value === 'number' || typeof value === 'boolean')
      return String(value);
    if (typeof value === 'object') return JSON.stringify(value);
    return fallback;
  }
  // Retention policy
  @Cron(CronExpression.EVERY_DAY_AT_1AM)
  async retention(): Promise<void> {
    let daysToRetain = Number(process.env.LOG_RETENTION_DAYS) || 7;
    if (isNaN(daysToRetain) || daysToRetain <= 0) {
      this.logger.error(
        `Invalid LOG_RETENTION_DAYS value: ${process.env.LOG_RETENTION_DAYS}. Using default of 7 days.`,
      );
      daysToRetain = 7;
    }

    const cutoffDate = new Date(
      Date.now() - daysToRetain * 24 * 60 * 60 * 1000,
    );

    try {
      const result = await this.prisma.logEntry.deleteMany({
        where: { timestamp: { lt: cutoffDate } },
      });
      if (result.count > 0) {
        this.logger.warn(
          `🧹 Retention: Deleted ${result.count} log entries older than ${daysToRetain} days.`,
        );
      }
    } catch (error) {
      this.logger.error('Error during log retention cleanup:', error);
    }
  }
}
