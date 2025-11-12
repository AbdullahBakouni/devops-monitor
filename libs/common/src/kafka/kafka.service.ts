import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
import { Kafka, Producer, Consumer } from 'kafkajs';

@Injectable()
export class KafkaService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(KafkaService.name);
  private kafka: Kafka;
  public producer: Producer | null = null;
  private isConnected = false;

  async onModuleInit() {
    // Silence the partitioner warning
    process.env.KAFKAJS_NO_PARTITIONER_WARNING = '1';

    this.kafka = new Kafka({
      clientId: 'devops-monitor',
      brokers: [process.env.KAFKA_BROKER ?? 'localhost:9092'],
      retry: {
        retries: 3,
        initialRetryTime: 300,
        maxRetryTime: 3000,
      },
      connectionTimeout: 3000,
      requestTimeout: 5000,
    });

    this.producer = this.kafka.producer();

    try {
      await this.producer.connect();
      this.isConnected = true;
      this.logger.log('✅ Kafka producer connected');
    } catch (error) {
      this.logger.warn('⚠️  Kafka not available - running without Kafka');
      this.logger.warn('💡 To enable Kafka: docker-compose up -d kafka');
      this.isConnected = false;
      this.producer = null;
    }
  }

  async onModuleDestroy() {
    if (this.producer && this.isConnected) {
      try {
        await this.producer.disconnect();
        this.logger.log('Kafka producer disconnected');
      } catch (error) {
        this.logger.error('Error disconnecting Kafka producer:', error);
      }
    }
  }

  async produce(topic: string, message: unknown): Promise<void> {
    if (!this.isConnected || !this.producer) {
      this.logger.debug(
        `Kafka not connected - skipping message to topic: ${topic}`,
      );
      return;
    }

    try {
      await this.producer.send({
        topic,
        messages: [{ value: JSON.stringify(message) }],
      });
    } catch (error) {
      this.logger.error(
        `Failed to send message to Kafka topic ${topic}:`,
        error,
      );
    }
  }

  createConsumer(groupId: string): Consumer | null {
    if (!this.isConnected) {
      this.logger.warn('Cannot create consumer - Kafka not connected');
      return null;
    }
    return this.kafka.consumer({ groupId });
  }

  async sendLog(message: unknown): Promise<void> {
    if (!this.isConnected || !this.producer) {
      // Silently skip if Kafka is not available
      return;
    }

    try {
      await this.producer.send({
        topic: process.env.LOGS_TOPIC ?? 'logs',
        messages: [{ value: JSON.stringify(message) }],
      });
    } catch (error) {
      this.logger.debug('Failed to send log to Kafka - will use fallback');
    }
  }

  isKafkaConnected(): boolean {
    return this.isConnected;
  }
}
