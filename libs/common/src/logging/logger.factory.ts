import { Injectable, Scope } from '@nestjs/common';
import { KafkaLogger } from './kafka-logger.service';

@Injectable({ scope: Scope.DEFAULT })
export class LoggerFactory {
  constructor(private readonly kafkaLogger: KafkaLogger) {}

  /**
   * Creates a configured logger instance for a specific context
   * @param context - The class or context name (e.g., 'MetricsService')
   * @param serviceName - Optional service name (defaults to env SERVICE_NAME)
   * @param token - Optional token (defaults to env LOG_TOKEN)
   */
  create(context: string, serviceName?: string, token?: string): KafkaLogger {
    const service =
      serviceName || process.env.SERVICE_NAME || 'unknown-service';
    const logToken = token || process.env.LOG_TOKEN;

    // Create a new instance and set context
    return (Object.create(this.kafkaLogger) as KafkaLogger).setContext(
      context,
      service,
      logToken,
    );
  }

  /**
   * Creates a logger using the class constructor name as context
   */
  createForClass(classConstructor: new (...args: any[]) => any): KafkaLogger {
    return this.create(classConstructor.name);
  }
}
