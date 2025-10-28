import {
  Injectable,
  Logger,
  OnModuleInit,
  OnModuleDestroy,
  Inject,
} from '@nestjs/common';
import * as k8s from '@kubernetes/client-node';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { DatabaseService } from '@app/database';
import * as fs from 'fs';
import * as path from 'path';
import { PUB_SUB } from './pubsub.provider';
@Injectable()
export class K8sRuntimeMonitorService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(K8sRuntimeMonitorService.name);
  private k8sClient: k8s.CoreV1Api | null = null;
  private kubeConfig: k8s.KubeConfig | null = null;
  private watch: k8s.Watch | null = null;
  private abortController: AbortController | null = null;
  private latestStatuses: {
    name: string;
    status: string;
    reason: string;
    updatedAt: Date;
  }[] = [];

  constructor(
    private readonly prisma: DatabaseService,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
  ) {}

  onModuleInit() {
    this.k8sClient = this.initializeK8sClient();
    if (this.k8sClient) {
      this.startK8sWatch();
    }
  }

  onModuleDestroy() {
    if (this.abortController) {
      this.logger.log('🛑 Stopping Kubernetes watch stream...');
      this.abortController.abort();
    }
  }

  /**
   * ☸️ Initialize Kubernetes client with auto-detection
   */
  private initializeK8sClient(): k8s.CoreV1Api | null {
    try {
      const kc = new k8s.KubeConfig();

      // Detect if running inside Kubernetes
      const inCluster = fs.existsSync(
        '/var/run/secrets/kubernetes.io/serviceaccount/token',
      );

      if (inCluster) {
        kc.loadFromCluster();
        this.logger.log(
          '🏗️ Detected in-cluster environment — using in-cluster K8s configuration',
        );
      } else {
        // Try local configs
        const kubeconfigPath =
          process.env.KUBECONFIG ||
          path.join(process.env.HOME || '/root', '.kube', 'config');

        if (fs.existsSync(kubeconfigPath)) {
          kc.loadFromFile(kubeconfigPath);
          this.logger.log(`🧩 Using kubeconfig from: ${kubeconfigPath}`);
        } else {
          kc.loadFromDefault();
          this.logger.log('☁️ Using default kubeconfig context');
        }
      }

      this.kubeConfig = kc;
      const client = kc.makeApiClient(k8s.CoreV1Api);
      this.logger.log('✅ Kubernetes client initialized successfully');
      return client;
    } catch (err) {
      this.logger.warn(
        `⚠️ Failed to initialize Kubernetes client: ${(err as Error).message}`,
      );
      return null;
    }
  }

  /**
   * 📡 Start watching Kubernetes pods
   */
  private startK8sWatch() {
    if (!this.k8sClient || !this.kubeConfig) {
      this.logger.warn('⚠️ No Kubernetes client available — skipping watch');
      return;
    }

    this.watch = new k8s.Watch(this.kubeConfig);
    this.abortController = new AbortController();

    this.logger.log('📡 Watching Kubernetes pods for changes...');

    void this.watch
      .watch(
        '/api/v1/pods',
        {},
        (type, obj: k8s.V1Pod) => {
          void this.handlePodEvent(type, obj);
        },
        (err) => {
          if (err) {
            this.logger.error(
              `❌ Kubernetes watch error: ${(err as Error).message}`,
            );
          }
        },
      )
      .catch((err) => {
        this.logger.error(
          `Failed to start K8s watch: ${(err as Error).message}`,
        );
      });
  }

  /**
   * Handle individual pod events
   */
  private async handlePodEvent(type: string, obj: k8s.V1Pod): Promise<void> {
    try {
      const podName = obj.metadata?.name;
      if (!podName) {
        return;
      }

      const phase = obj.status?.phase;
      const reason =
        obj.status?.containerStatuses?.[0]?.state?.waiting?.reason ||
        obj.status?.containerStatuses?.[0]?.state?.terminated?.reason ||
        phase;

      const status =
        phase === 'Running'
          ? 'UP'
          : phase === 'Pending'
            ? 'STARTING'
            : phase === 'Succeeded'
              ? 'COMPLETED'
              : phase === 'Failed'
                ? 'DOWN'
                : 'UNKNOWN';

      this.latestStatuses = this.latestStatuses.filter(
        (s) => s.name !== podName,
      );
      this.latestStatuses.push({
        name: podName,
        status,
        reason: reason || 'Unknown',
        updatedAt: new Date(),
      });

      await this.prisma.service.updateMany({
        where: { name: podName },
        data: {
          runtimeStatus: status,
          lastReason: reason,
          lastSeenAt: new Date(),
        },
      });

      // await this.pubSub.publish('serviceEventCreated', {
      //   serviceEventCreated: {
      //     id: `${podName}-${Date.now()}`,
      //     service: podName,
      //     cluster: 'kubernetes',
      //     status,
      //     message: reason,
      //     createdAt: new Date().toISOString(),
      //   },
      // });

      this.logger.debug(`☸️ Pod ${podName} → ${status} (${reason})`);
    } catch (err) {
      this.logger.error(
        `Error processing pod event: ${(err as Error).message}`,
      );
    }
  }

  getLatestStatuses() {
    return this.latestStatuses;
  }
}
