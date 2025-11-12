// import { Injectable, LoggerService, Scope } from '@nestjs/common';
// import { KafkaService } from '../kafka/kafka.service';

// interface LogMetadata {
//   [key: string]: unknown;
// }

// @Injectable({ scope: Scope.TRANSIENT }) // Important: allows per-service context
// export class KafkaLogger implements LoggerService {
//   private context?: string;
//   private serviceName?: string;
//   private logToken?: string;

//   constructor(private readonly kafkaService: KafkaService) {}

//   setContext(context: string, serviceName?: string, token?: string) {
//     this.context = context;
//     this.serviceName =
//       serviceName || process.env.SERVICE_NAME || 'unknown-service';
//     this.logToken = token || process.env.LOG_TOKEN;
//     return this;
//   }

//   async log(message: string, metadata?: LogMetadata) {
//     await this.sendLog('log', message, metadata);
//   }

//   async error(message: string, trace?: string, metadata?: LogMetadata) {
//     await this.sendLog('error', message, { ...metadata, trace });
//   }

//   async warn(message: string, metadata?: LogMetadata) {
//     await this.sendLog('warn', message, metadata);
//   }

//   async debug(message: string, metadata?: LogMetadata) {
//     await this.sendLog('debug', message, metadata);
//   }

//   async verbose(message: string, metadata?: LogMetadata) {
//     await this.sendLog('log', message, metadata);
//   }

//   private async sendLog(
//     level: string,
//     message: string,
//     metadata?: LogMetadata,
//   ): Promise<void> {
//     // Fallback to console immediately for visibility
//     const timestamp = new Date().toISOString();
//     const prefix = `[${timestamp}] [${this.serviceName}:${this.context}] [${level.toUpperCase()}]`;

//     // Color codes
//     const colors = {
//       error: '\x1b[31m', // Red
//       warn: '\x1b[33m', // Yellow
//       debug: '\x1b[36m', // Cyan
//       log: '\x1b[32m', // Green
//       reset: '\x1b[0m',
//     };

//     const color = colors[level as keyof typeof colors] || colors.log;

//     // Format metadata nicely
//     let output = `${color}${prefix} ${message}${colors.reset}`;

//     if (metadata && Object.keys(metadata).length > 0) {
//       const metaStr = Object.entries(metadata)
//         .map(([key, val]) => `${key}=${JSON.stringify(val)}`)
//         .join(' ');
//       output += ` ${color}[${metaStr}]${colors.reset}`;
//     }
//     switch (level) {
//       case 'error':
//         console.error(output);
//         if (metadata?.trace) console.error(metadata.trace);
//         break;
//       case 'warn':
//         console.warn(output);
//         break;
//       case 'debug':
//         if (process.env.LOG_LEVEL === 'debug') {
//           console.debug(output);
//         }
//         break;
//       default:
//         console.log(output);
//     }

//     // Send to Kafka asynchronously (don't block)
//     await this.sendToKafka(level, message, metadata).catch((error) => {
//       // Silent fail - already logged to console
//       const e = error as Error;
//       console.debug('Kafka logging failed:', e.message);
//     });
//   }

//   private async sendToKafka(
//     level: string,
//     message: string,
//     metadata?: LogMetadata,
//   ): Promise<void> {
//     if (!this.kafkaService.isKafkaConnected()) {
//       return; // Silently skip if Kafka not available
//     }

//     try {
//       await this.kafkaService.sendLog({
//         token: this.logToken,
//         service: this.serviceName,
//         level,
//         message,
//         context: this.context,
//         timestamp: new Date().toISOString(),
//         ...metadata,
//       });
//     } catch (error) {
//       // Fail silently - console already has the log
//     }
//   }
// }

import { Injectable, LoggerService, Scope } from '@nestjs/common';
import { KafkaService } from '../kafka/kafka.service';
import * as os from 'os';
import * as fs from 'fs';

interface LogMetadata {
  [key: string]: unknown;
}

interface SystemInfo {
  host: string;
  pod?: string;
  namespace?: string;
  image?: string;
  source: 'docker' | 'k8s' | 'local';
}

@Injectable({ scope: Scope.TRANSIENT })
export class KafkaLogger implements LoggerService {
  private context?: string;
  private serviceName?: string;
  private logToken?: string;

  // Cache system info (computed once per service)
  private static systemInfo: SystemInfo | null = null;

  constructor(private readonly kafkaService: KafkaService) {
    // Initialize system info on first instantiation
    if (!KafkaLogger.systemInfo) {
      KafkaLogger.systemInfo = this.detectSystemInfo();
    }
  }

  setContext(context: string, serviceName?: string, token?: string) {
    this.context = context;
    this.serviceName =
      serviceName || process.env.SERVICE_NAME || 'unknown-service';
    this.logToken = token || process.env.LOG_TOKEN;
    return this;
  }

  async log(message: string, metadata?: LogMetadata) {
    await this.sendLog('log', message, metadata);
  }

  async error(message: string, trace?: string, metadata?: LogMetadata) {
    await this.sendLog('error', message, { ...metadata, trace });
  }

  async warn(message: string, metadata?: LogMetadata) {
    await this.sendLog('warn', message, metadata);
  }

  async debug(message: string, metadata?: LogMetadata) {
    await this.sendLog('debug', message, metadata);
  }

  async verbose(message: string, metadata?: LogMetadata) {
    await this.sendLog('log', message, metadata);
  }

  /**
   * Detect system information using Docker/K8s detection logic
   */
  private detectSystemInfo(): SystemInfo {
    const hostname = os.hostname();

    // Check if running in Kubernetes
    const k8sServiceAccountToken =
      '/var/run/secrets/kubernetes.io/serviceaccount/token';
    const inK8sCluster = fs.existsSync(k8sServiceAccountToken);

    if (inK8sCluster) {
      return {
        host: hostname,
        pod: process.env.HOSTNAME || process.env.POD_NAME || hostname,
        namespace:
          process.env.NAMESPACE ||
          process.env.POD_NAMESPACE ||
          this.getK8sNamespace(),
        image: process.env.IMAGE_NAME || process.env.CONTAINER_IMAGE,
        source: 'k8s',
      };
    }

    // Check if running inside Docker
    const insideDockerContainer =
      fs.existsSync('/.dockerenv') || this.isRunningInDocker();

    if (insideDockerContainer) {
      return {
        host: hostname,
        pod: process.env.HOSTNAME || hostname,
        namespace: process.env.NAMESPACE || 'default',
        image: process.env.IMAGE_NAME || process.env.DOCKER_IMAGE,
        source: 'docker',
      };
    }

    // Running locally
    return {
      host: hostname,
      source: 'local',
    };
  }

  /**
   * Check if running in Docker by reading cgroup file
   */
  private isRunningInDocker(): boolean {
    try {
      const cgroupPath = '/proc/self/cgroup';
      if (fs.existsSync(cgroupPath)) {
        const cgroup = fs.readFileSync(cgroupPath, 'utf8');
        return cgroup.includes('docker') || cgroup.includes('kubepods');
      }
    } catch {
      // Ignore errors
    }
    return false;
  }

  /**
   * Try to read namespace from K8s service account
   */
  private getK8sNamespace(): string | undefined {
    try {
      const namespacePath =
        '/var/run/secrets/kubernetes.io/serviceaccount/namespace';
      if (fs.existsSync(namespacePath)) {
        return fs.readFileSync(namespacePath, 'utf8').trim();
      }
    } catch {
      // Ignore errors
    }
    return undefined;
  }

  private async sendLog(
    level: string,
    message: string,
    metadata?: LogMetadata,
  ): Promise<void> {
    // Fallback to console immediately for visibility
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${this.serviceName}:${this.context}] [${level.toUpperCase()}]`;

    // Color codes
    const colors = {
      error: '\x1b[31m', // Red
      warn: '\x1b[33m', // Yellow
      debug: '\x1b[36m', // Cyan
      log: '\x1b[32m', // Green
      reset: '\x1b[0m',
    };

    const color = colors[level as keyof typeof colors] || colors.log;

    // Format metadata nicely
    let output = `${color}${prefix} ${message}${colors.reset}`;

    if (metadata && Object.keys(metadata).length > 0) {
      const metaStr = Object.entries(metadata)
        .map(([key, val]) => `${key}=${JSON.stringify(val)}`)
        .join(' ');
      output += ` ${color}[${metaStr}]${colors.reset}`;
    }

    switch (level) {
      case 'error':
        console.error(output);
        if (metadata?.trace) console.error(metadata.trace);
        break;
      case 'warn':
        console.warn(output);
        break;
      case 'debug':
        if (process.env.LOG_LEVEL === 'debug') {
          console.debug(output);
        }
        break;
      default:
        console.log(output);
    }

    // Send to Kafka asynchronously (don't block)
    await this.sendToKafka(level, message, metadata).catch((error) => {
      // Silent fail - already logged to console
      const e = error as Error;
      console.debug('Kafka logging failed:', e.message);
    });
  }

  private async sendToKafka(
    level: string,
    message: string,
    metadata?: LogMetadata,
  ): Promise<void> {
    if (!this.kafkaService.isKafkaConnected()) {
      return; // Silently skip if Kafka not available
    }

    try {
      const sysInfo = KafkaLogger.systemInfo!;

      // Enrich log with auto-detected system information
      const enrichedLog = {
        token: this.logToken,
        service: this.serviceName,
        level,
        message,
        context: this.context,
        timestamp: new Date().toISOString(),

        // Auto-populated system fields
        host: sysInfo.host,
        pod: sysInfo.pod,
        namespace: sysInfo.namespace,
        image: sysInfo.image,
        source: sysInfo.source,

        // Include trace info if in metadata
        traceId: metadata?.traceId as string | undefined,
        spanId: metadata?.spanId as string | undefined,

        // Spread remaining metadata (exclude duplicates)
        ...this.sanitizeMetadata(metadata),
      };

      await this.kafkaService.sendLog(enrichedLog);
    } catch (error) {
      // Fail silently - console already has the log
    }
  }

  /**
   * Remove fields that are already handled separately to avoid duplication
   */
  private sanitizeMetadata(metadata?: LogMetadata): LogMetadata {
    if (!metadata) return {};

    const { traceId, spanId, trace, ...rest } = metadata;
    return rest;
  }

  /**
   * Get current system info (useful for debugging)
   */
  static getSystemInfo(): SystemInfo | null {
    return this.systemInfo;
  }
}
