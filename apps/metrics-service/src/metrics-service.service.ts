import { Injectable, Inject } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { DockerCollector } from './collectors/docker.collector';
import { K8sCollector } from './collectors/k8s.collerctor';
import { DatabaseService } from '@app/database';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from '@app/common/pubsub/pubsub.provider';
import { MetricsAlertEngine } from './alerts/metrics-alert-engine';
import { randomUUID } from 'crypto';
import { ClusterDetector } from './collectors/cluster.collector';
import { AnomalyDetectorV2 } from './ml/anomaly-detector-v2';
import { KafkaLogger } from '@app/common/logging/kafka-logger.service';
import { LoggerFactory } from '@app/common/logging/logger.factory';
interface UnifiedMetric {
  name: string;
  service?: string;
  networkRx?: number;
  networkTx?: number;
  status?: number;
  state: string;
  cpuUsage: number;
  memoryUsage: number;
  networkIO: { rx: number; tx: number };
  source: string;
  createdAt: Date;
}
interface AlertPayload {
  type: string;
  title: string;
  message: string;
  service: string;
  cluster: string;
  metric: string;
  metricDisplayName: string;
  value: number;
  threshold: number;
  expected: number;
  score?: number;
  anomalyConfidence: number;
  createdAt: string;
}
@Injectable()
export class MetricsService {
  private alertEngine = new MetricsAlertEngine();
  private lastAlerts = new Map<string, number>();

  private readonly LOG_TOKEN = process.env.METRICS_SERVICE_TOKEN;
  private readonly logger: KafkaLogger;
  constructor(
    private readonly docker: DockerCollector,
    private readonly k8s: K8sCollector,
    private readonly prisma: DatabaseService,
    private readonly anomalyDetector: AnomalyDetectorV2,
    private readonly clusterDetector: ClusterDetector,
    loggerFactory: LoggerFactory,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
  ) {
    this.logger = loggerFactory.create(
      'MetricsService',
      'MetricsService',
      this.LOG_TOKEN,
    );
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async collect(): Promise<void> {
    await this.logger.log('📊 Collecting system metrics...');
    const dockerMetrics = await this.docker.collectMetrics();
    const k8sMetrics = await this.k8s.collect();

    const allMetrics: UnifiedMetric[] = [
      ...dockerMetrics.map((m) => ({ ...m, source: 'docker' })),
      ...k8sMetrics.map(
        (m): UnifiedMetric => ({
          name: m.service,
          state: 'running',
          cpuUsage: m.cpuUsage,
          memoryUsage: m.memoryUsage,
          networkIO: { rx: 0, tx: 0 },
          source: 'k8s',
          createdAt: m.timestamp,
        }),
      ),
    ];

    for (const metric of allMetrics) {
      await this.prisma.metrics.upsert({
        where: {
          service_source: {
            service: metric.name,
            source: metric.source,
          },
        },
        update: {
          cpu: metric.cpuUsage ?? 0,
          memory: metric.memoryUsage ?? 0,
          networkRx: metric.networkIO?.rx ?? 0,
          networkTx: metric.networkIO?.tx ?? 0,
          status: metric.state,
        },
        create: {
          service: metric.name,
          source: metric.source,
          cpu: metric.cpuUsage ?? 0,
          memory: metric.memoryUsage ?? 0,
          networkRx: metric.networkIO?.rx ?? 0,
          networkTx: metric.networkIO?.tx ?? 0,
          status: metric.state,
        },
      });
      await this.pubSub.publish('metricsUpdated', {
        metricsUpdated: {
          service: metric.name, // pod name + namespace
          cpuUsage: metric.cpuUsage, // percentage %
          memoryUsage: metric.memoryUsage, // MiB
          networkRx: metric.networkIO.rx ?? 0, // fallback to 0 if not available
          networkTx: metric.networkIO.tx ?? 0,
          status: metric.state ?? 'Unkown',
          source: metric.source ?? 'Unkown',
          timestamp: new Date().toISOString(),
        },
      });

      await this.handleMetrics({
        service: metric.name,
        cpu: metric.cpuUsage,
        memory: metric.memoryUsage,
      });
    }

    await this.logger.log(
      `✅ Metrics collected ,dockerCount:${dockerMetrics.length},k8sCount:${k8sMetrics.length}`,
      {
        dockerCount: dockerMetrics.length,
        k8sCount: k8sMetrics.length,
      },
    );
  }
  async handleMetrics(sample: {
    service: string;
    cpu: number;
    memory?: number;
    cluster?: string;
  }) {
    const { service, cpu, memory = 0 } = sample;
    const cluster = sample.cluster || this.clusterDetector.detectCluster();

    // ⏺️ Record CPU & Memory samples
    this.alertEngine.addSample(service, cpu, memory);

    // ✅ ML anomaly detection (CPU only now)
    const anomaly = this.anomalyDetector.detect(service, 'cpu', cpu);
    if (anomaly.anomaly) {
      const confidence = anomaly.deviation
        ? Math.min(Math.abs(anomaly.deviation) / 50, 1.0)
        : 0.8;
      await this.publishAlert({
        type: 'ANOMALY',
        title: `🤖 ML CPU anomaly detected`,
        message: `${service} CPU spiked to ${cpu.toFixed(1)}% (expected ≈ ${anomaly.expected?.toFixed(1) ?? 0}%)`,
        service,
        metric: 'cpu',
        metricDisplayName: 'CPU Usage',
        value: cpu,
        threshold: anomaly.bandHigh ?? 0, // ✅ No threshold for anomaly detection
        expected: anomaly.expected ?? 0,
        anomalyConfidence: confidence, // Add confidence if available
        cluster,
        score: anomaly.score,
        createdAt: new Date().toISOString(),
      });

      // await this.sendLog({
      //   level: 'warn',
      //   message: `🤖 ML anomaly: ${service} CPU=${cpu}% expected≈${anomaly.expected}%`,
      //   service,
      //   cpu,
      //   expected: anomaly.expected,
      //   anomalyType: 'cpu',
      // });
      await this.logger.warn(
        `🤖 ML anomaly: ${service} CPU=${cpu}% expected≈${anomaly.expected}%`,
        {
          service: sample.service,
          cpu: sample.cpu,
          expected: anomaly.expected,
          anomalyType: 'cpu',
        },
      );
    }

    // ✅ Threshold rules (CPU + Memory)
    const alerts = this.alertEngine.checkAlerts(service);

    for (const alert of alerts) {
      await this.publishAlert({
        type: alert.rule.severity,
        title: `⚠️ ${alert.rule.name}`,
        message: `${service} ${alert.rule.metric.toUpperCase()} ${alert.value.toFixed(1)}% > ${alert.rule.value}%`,
        service,
        metric: alert.rule.metric,
        metricDisplayName: this.getMetricDisplayName(alert.rule.metric),
        value: alert.value,
        threshold: alert.rule.value,
        expected: 0, // ✅ No expected value for threshold alerts
        anomalyConfidence: 0, // ✅ Not an ML anomaly
        cluster,
        createdAt: new Date().toISOString(),
      });

      // await this.sendLog({
      //   level: 'warn',
      //   message: `🔥 Alert: ${service} ${alert.rule.metric}=${alert.value.toFixed(1)}%`,
      //   service,
      //   metric: alert.rule.metric,
      //   value: alert.value,
      //   threshold: alert.rule.value,
      // });
      await this.logger.warn(
        `🔥 Alert: ${service} ${alert.rule.metric}=${alert.value.toFixed(1)}%`,
        {
          service,
          metric: alert.rule.metric,
          value: alert.value,
          threshold: alert.rule.value,
        },
      );
    }
  }

  private async publishAlert(payload: AlertPayload) {
    const key = `${payload.service}:${payload.metric}:${payload.type}`;
    const now = Date.now();

    // 🧊 dedup 60s
    if (this.lastAlerts.has(key) && now - this.lastAlerts.get(key)! < 60_000) {
      // await this.sendLog({
      //   level: 'debug',
      //   message: `🧊 Skip duplicate alert ${key}`,
      //   alertKey: key,
      // });

      await this.logger.debug(`🧊 Skip duplicate alert ${key}`, {
        message: `🧊 Skip duplicate alert ${key}`,
        alertKey: key,
      });
      return;
    }

    this.lastAlerts.set(key, now);
    const id = randomUUID();
    await this.pubSub.publish('notificationCreated', {
      notificationCreated: {
        id,
        type: payload.type,
        title: payload.title,
        message: payload.message,
        service: payload.service,
        cluster: payload.cluster,
        createdAt: payload.createdAt,
      },
    });

    await this.pubSub.publish('metricsAlert', {
      metricsAlert: payload,
    });

    // await this.sendLog({
    //   level: 'log',
    //   message: `📡 Alert broadcast: ${payload.service} [${payload.type}]`,
    //   alertType: payload.type,
    //   service: payload.service,
    //   metric: payload.metric,
    //   value: payload.value,
    // });

    await this.logger.log(
      `📡 Alert broadcast: ${payload.service} [${payload.type}]`,
      {
        alertType: payload.type,
        service: payload.service,
        metric: payload.metric,
        value: payload.value,
      },
    );
  }
  private getMetricDisplayName(metric: string): string {
    const displayNames: Record<string, string> = {
      cpu: 'CPU Usage',
      memory: 'Memory Usage',
      traffic: 'Network Traffic',
      latency: 'Response Latency',
      disk: 'Disk Usage',
    };
    return displayNames[metric] || metric.toUpperCase();
  }
}
