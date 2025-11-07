import { Injectable, Logger } from '@nestjs/common';
import * as k8s from '@kubernetes/client-node';
import * as fs from 'fs';
import * as path from 'path';
import { K8sMetricsUtil } from './utils/k8s-metrics.util';

@Injectable()
export class K8sCollector {
  private readonly logger = new Logger(K8sCollector.name);
  private kubeConfig: k8s.KubeConfig | null = null;
  private k8sApi: k8s.CoreV1Api | null = null;
  private metricsApi: k8s.Metrics | null = null;
  constructor() {
    this.k8sApi = this.initializeK8sClient();
    if (this.k8sApi && this.kubeConfig) {
      this.metricsApi = new k8s.Metrics(this.kubeConfig);
    }
  }
  private initializeK8sClient(): k8s.CoreV1Api | null {
    try {
      const kc = new k8s.KubeConfig();
      const inCluster = fs.existsSync(
        '/var/run/secrets/kubernetes.io/serviceaccount/token',
      );

      if (inCluster) {
        kc.loadFromCluster();
        this.logger.log(
          '🏗️ Detected in-cluster environment — using in-cluster K8s configuration',
        );
      } else {
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
      const errorMessage = err instanceof Error ? err.message : String(err);
      this.logger.warn(
        `⚠️ Failed to initialize Kubernetes client: ${errorMessage}`,
      );
      return null;
    }
  }

  async collect() {
    if (!this.k8sApi || !this.metricsApi) {
      this.logger.warn(
        '⚠️ K8s client not initialized — skipping metrics collection.',
      );
      return [];
    }

    const hasMetricsServer = await this.isMetricsServerAvailable();

    if (!hasMetricsServer) {
      this.logger.warn(
        '❌ Metrics-server unavailable — canceling K8s metrics collection try: minikube addons enable metrics-server',
      );
      return [];
    }

    try {
      // Get all namespaces
      const namespacesResponse = await this.k8sApi.listNamespace();
      const namespaces = namespacesResponse.items;

      const metrics: {
        service: string;
        cluster: string;
        cpuUsage: number;
        memoryUsage: number;
        timestamp: Date;
      }[] = [];

      // Iterate through each namespace and collect pod metrics
      for (const ns of namespaces) {
        const namespaceName = ns.metadata?.name;
        if (!namespaceName) continue;

        try {
          // Use topPods utility function for the namespace
          const podMetrics = await k8s.topPods(
            this.k8sApi,
            this.metricsApi,
            namespaceName,
          );

          for (const podMetric of podMetrics) {
            const podName = podMetric.Pod.metadata?.name;
            if (!podName) continue;

            const cpuUsage = K8sMetricsUtil.convertCpuToPercentage(
              podMetric.CPU.CurrentUsage,
            );
            const memoryUsage = K8sMetricsUtil.convertMemoryToMiB(
              podMetric.Memory.CurrentUsage,
            );

            metrics.push({
              service: `${namespaceName}/${podName}`,
              cluster: 'k8s',
              cpuUsage,
              memoryUsage,
              timestamp: new Date(),
            });
          }
        } catch (nsErr) {
          const errorMessage =
            nsErr instanceof Error ? nsErr.message : String(nsErr);
          this.logger.debug(
            `⚠️ Skipping namespace ${namespaceName}: ${errorMessage}`,
          );
        }
      }

      this.logger.log(`📈 Collected ${metrics.length} K8s pod metrics`);
      return metrics;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      this.logger.error(`❌ Failed to collect K8s metrics: ${errorMessage}`);
      return [];
    }
  }

  private async isMetricsServerAvailable(): Promise<boolean> {
    if (!this.metricsApi) return false;

    try {
      await this.metricsApi.getNodeMetrics();
      this.logger.log('✅ Metrics Server is available');
      return true;
    } catch (e) {
      const error = e as Error;
      this.logger.debug(
        `⚠️ Metrics Server NOT available - skipping K8s metrics : ${error}`,
      );
      return false;
    }
  }
}
