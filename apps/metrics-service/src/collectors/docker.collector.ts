import Docker from 'dockerode';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { Injectable, Logger } from '@nestjs/common';
interface Metric {
  id: string;
  service: string;
  cluster: string;
  cpuUsage: number;
  memoryUsage: number;
  timestamp: Date;
  networkIO: { rx: number; tx: number };
  state: string;
  name: string;
  createdAt: Date;
}
interface StoredContainerStats {
  cpuUsage: number; // total_usage from cpu_stats.cpu_usage
  systemUsage: number; // system_cpu_usage from cpu_stats
  // Add other stats if you need to track their deltas later, e.g., memory, network
}
@Injectable()
export class DockerCollector {
  private readonly logger = new Logger(DockerCollector.name);
  private docker: Docker;
  private lastCollectedStats = new Map<string, StoredContainerStats>();

  constructor() {
    this.docker = this.initializeDockerClient();
  }

  private initializeDockerClient(): Docker {
    const platform = os.platform();
    let socketPath = '/var/run/docker.sock';
    let dockerOptions: Docker.DockerOptions = {};
    if (process.env.DOCKER_HOST) {
      this.logger.log(
        `🌐 Using remote Docker host: ${process.env.DOCKER_HOST}`,
      );

      dockerOptions = {
        host: process.env.DOCKER_HOST.replace('tcp://', ''),
        port: process.env.DOCKER_PORT ? Number(process.env.DOCKER_PORT) : 2375,
        protocol: 'http',
      };

      if (
        process.env.DOCKER_TLS_VERIFY === '1' &&
        process.env.DOCKER_CERT_PATH
      ) {
        const certPath = process.env.DOCKER_CERT_PATH;
        dockerOptions = {
          ...dockerOptions,
          ca: fs.readFileSync(path.join(certPath, 'ca.pem')),
          cert: fs.readFileSync(path.join(certPath, 'cert.pem')),
          key: fs.readFileSync(path.join(certPath, 'key.pem')),
          protocol: 'https',
        };
        this.logger.log('🔐 TLS connection enabled for Docker host.');
      }

      return new Docker(dockerOptions);
    }
    const insideContainer =
      fs.existsSync('/.dockerenv') && fs.existsSync('/var/run/docker.sock');

    if (insideContainer) {
      this.logger.log(
        '🐳 Running inside Docker container — connecting via socket',
      );
      dockerOptions = { socketPath };
      return new Docker(dockerOptions);
    }
    switch (platform) {
      case 'win32':
        socketPath = '//./pipe/docker_engine';
        this.logger.log('🪟 Detected Windows — using named pipe');
        dockerOptions = { socketPath };
        break;
      case 'darwin':
        this.logger.log('🍎 Detected macOS — using Unix socket');
        dockerOptions = { socketPath };
        break;
      default:
        this.logger.log('🐧 Detected Linux — using Unix socket');
        dockerOptions = { socketPath };
        break;
    }

    if (!fs.existsSync(socketPath)) {
      this.logger.warn(`⚠️ Docker socket not found at ${socketPath}`);
    }

    return new Docker(dockerOptions);
  }

  async collectMetrics(): Promise<Metric[]> {
    const metrics: Metric[] = [];
    try {
      const containers = await this.docker.listContainers({
        filters: { status: ['running'] },
      });
      this.logger.log(`📦 Found ${containers.length} containers.`);

      for (const containerInfo of containers) {
        const container = this.docker.getContainer(containerInfo.Id);
        const statsStream = await container.stats({ stream: false });
        const prevStats = this.lastCollectedStats.get(containerInfo.Id);
        // Store current stats for next iteration
        this.lastCollectedStats.set(containerInfo.Id, {
          cpuUsage: statsStream.cpu_stats.cpu_usage.total_usage,
          systemUsage: statsStream.cpu_stats.system_cpu_usage,
        });

        // Skip metric creation if this is the first collection
        if (!prevStats) {
          this.logger.debug(
            `Skipping ${containerInfo.Id} - first collection (no baseline)`,
          );
          continue;
        }
        const cpuUsage = this.calculateCPUPercent(statsStream, prevStats);
        const memoryUsage = this.calculateMemoryPercent(statsStream);
        const net: { rx: number; tx: number } = statsStream.networks
          ? Object.values(statsStream.networks).reduce(
              (
                acc: { rx: number; tx: number },
                net: { rx_bytes: number; tx_bytes: number },
              ) => ({
                rx: acc.rx + net.rx_bytes,
                tx: acc.tx + net.tx_bytes,
              }),
              { rx: 0, tx: 0 },
            )
          : { rx: 0, tx: 0 };

        metrics.push({
          id: containerInfo.Id,
          name: containerInfo.Names?.[0]?.replace('/', '') || containerInfo.Id,
          service:
            containerInfo.Names?.[0]?.replace('/', '') || containerInfo.Id, // Added service
          cluster: 'docker', // Added cluster
          state: containerInfo.State,
          cpuUsage,
          memoryUsage,
          networkIO: net,
          createdAt: new Date(),
          timestamp: new Date(), // Added timestamp
        });
      }

      this.logger.log(
        `📈 Collected metrics for ${metrics.length} Docker containers.`,
      );
      return metrics;
    } catch (err) {
      const error = err as Error;
      this.logger.error(
        `❌ Failed to collect Docker metrics: ${error.message}`,
      );
      return [];
    }
  }
  private calculateCPUPercent(
    currentStats: Docker.ContainerStats, // Renamed from 'stats' for clarity
    prevStats?: StoredContainerStats, // Now accepts optional previous stats
  ): number {
    try {
      // Use stored previous stats if available, otherwise fall back to Docker's precpu_stats
      const cpuDelta =
        currentStats.cpu_stats.cpu_usage.total_usage -
        (prevStats?.cpuUsage ??
          currentStats.precpu_stats.cpu_usage.total_usage);
      const systemDelta =
        currentStats.cpu_stats.system_cpu_usage -
        (prevStats?.systemUsage ?? currentStats.precpu_stats.system_cpu_usage);
      const cpuCount = currentStats.cpu_stats.online_cpus || 1;
      if (systemDelta > 0 && cpuDelta > 0) {
        const cpuPercent = parseFloat(
          ((cpuDelta / systemDelta) * cpuCount * 100).toFixed(4),
        );
        this.logger.debug(`  Calculated CPU Percent: ${cpuPercent}%`);
        return cpuPercent;
      }
      return 0;
    } catch (e) {
      const error = e as Error;
      this.logger.error(`Error calculating CPU percent: ${error.message}`);
      return 0;
    }
  }

  private calculateMemoryPercent(stats: Docker.ContainerStats): number {
    try {
      const used =
        stats.memory_stats.usage - (stats.memory_stats.stats?.cache || 0);
      const available = stats.memory_stats.limit || 1;
      return parseFloat(((used / available) * 100).toFixed(4));
    } catch {
      return 0;
    }
  }
}
