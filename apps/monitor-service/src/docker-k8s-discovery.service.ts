import { Injectable, Logger } from '@nestjs/common';
import Docker from 'dockerode';
import * as k8s from '@kubernetes/client-node';
import { DatabaseService } from '@app/database';
import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';
import { analyzeService } from 'libs/utils/ai/ai.service-analyzer';
import { analyzeRelationships } from 'libs/utils/ai/ai.relationship-analyzer';
import pLimit from 'p-limit';
import { KafkaLogger } from '@app/common/logging/kafka-logger.service';
import { LoggerFactory } from '@app/common/logging/logger.factory';
interface DockerContainer {
  Names: string[];
  Image: string;
  Ports: Array<{ PublicPort?: number; PrivatePort?: number }>;
  Labels: Record<string, string>;
}

interface K8sService {
  metadata: {
    name: string;
    namespace: string;
    labels: Record<string, string>;
    annotations?: Record<string, string>;
  };
  spec: {
    ports: Array<{ port: number }>;
  };
}
interface ServiceRelationship {
  from: string;
  to: string;
  reason: string;
}
interface MockPrismaService {
  id: string; // Assuming 'id' is a string from your Prisma Service model
  name: string;
  // Add other properties of your Service model if 'analyzeRelationships' uses them
}

@Injectable()
export class DockerK8sDiscoveryService {
  private readonly logger = new Logger(DockerK8sDiscoveryService.name);
  private docker: Docker | null = null;
  private readonly LOG_TOKEN = process.env.MONITOR_SERVICE_TOKEN;
  private k8sClient: k8s.CoreV1Api | null = null;
  private readonly desc_all_service_logger: KafkaLogger;
  constructor(
    private readonly prisma: DatabaseService,
    loggerFactory: LoggerFactory,
  ) {
    void this.initializeDockerClient();
    void this.initializeK8sClient();
    this.desc_all_service_logger = loggerFactory.create(
      'DockerK8sDiscoveryService',
      'MonitorService',
      this.LOG_TOKEN,
    );
  }

  /**
   * 🐳 Initialize Docker client based on operating system
   */
  private async initializeDockerClient(): Promise<void> {
    try {
      const platform = os.platform();
      let dockerOptions: Docker.DockerOptions;

      switch (platform) {
        case 'win32':
          // Windows - Docker Desktop uses named pipe
          dockerOptions = {
            socketPath: '//./pipe/docker_engine',
          };
          await this.desc_all_service_logger.log(
            '🪟 Detected Windows - using named pipe for Docker',
          );
          break;

        case 'darwin':
          // macOS - Docker Desktop uses Unix socket
          dockerOptions = {
            socketPath: '/var/run/docker.sock',
          };
          await this.desc_all_service_logger.log(
            '🍎 Detected macOS - using Unix socket for Docker',
          );
          break;

        case 'linux':
          // Linux - standard Unix socket
          dockerOptions = {
            socketPath: '/var/run/docker.sock',
          };
          await this.desc_all_service_logger.log(
            '🐧 Detected Linux - using Unix socket for Docker',
          );
          break;

        default:
          throw new Error(`Unsupported platform: ${platform}`);
      }

      // Test if Docker socket/pipe exists and is accessible
      this.docker = new Docker(dockerOptions);

      // Verify connection
      this.docker
        .ping()
        .then(() => {
          this.logger.log('✅ Docker client initialized successfully');
        })
        .catch(async () => {
          await this.desc_all_service_logger.warn(
            '⚠️ Docker daemon not accessible - Docker discovery will be skipped',
          );
          this.docker = null;
        });
    } catch (error) {
      const err = error as Error;
      this.logger.warn(`⚠️ Failed to initialize Docker client: ${err.message}`);
      this.docker = null;
    }
  }

  /**
   * ☸️ Initialize Kubernetes client with multi-environment support
   */
  private async initializeK8sClient(): Promise<void> {
    try {
      const kc = new k8s.KubeConfig();
      const platform = os.platform();

      // Try different kubeconfig locations based on OS
      const kubeconfigPaths = this.getKubeconfigPaths(platform);

      let configLoaded = false;

      // Try loading from default locations
      for (const configPath of kubeconfigPaths) {
        if (fs.existsSync(configPath)) {
          try {
            kc.loadFromFile(configPath);
            configLoaded = true;
            await this.desc_all_service_logger.log(
              `✅ Loaded kubeconfig from: ${configPath}`,
            );
            break;
          } catch (error) {
            const err = error as Error;
            await this.desc_all_service_logger.debug(
              `Could not load kubeconfig from ${configPath}:${err}`,
            );
          }
        }
      }

      // If not loaded from file, try in-cluster config (for pods running in K8s)
      if (!configLoaded) {
        try {
          kc.loadFromCluster();
          configLoaded = true;
          await this.desc_all_service_logger.log(
            '✅ Loaded in-cluster Kubernetes configuration',
          );
        } catch (error) {
          const err = error as Error;
          await this.desc_all_service_logger.debug(
            `Not running in Kubernetes cluster: ${err}`,
          );
        }
      }

      // If still not loaded, try default method
      if (!configLoaded) {
        try {
          kc.loadFromDefault();
          configLoaded = true;
          await this.desc_all_service_logger.log(
            '✅ Loaded default Kubernetes configuration',
          );
        } catch (error) {
          const err = error as Error;
          throw new Error(`No valid kubeconfig found ${err}`);
        }
      }

      this.k8sClient = kc.makeApiClient(k8s.CoreV1Api);

      // Test connection
      this.k8sClient
        .listNamespace()
        .then(async () => {
          await this.desc_all_service_logger.log(
            '✅ Kubernetes client initialized successfully',
          );
        })
        .catch(async () => {
          await this.desc_all_service_logger.warn(
            '⚠️ Cannot connect to Kubernetes cluster',
          );
          this.k8sClient = null;
        });
    } catch (error) {
      const err = error as Error;
      this.logger.warn(`⚠️ Kubernetes client not initialized: ${err.message}`);
      this.k8sClient = null;
    }
  }

  /**
   * Get kubeconfig paths based on operating system
   */
  private getKubeconfigPaths(platform: string): string[] {
    const homedir = os.homedir();
    const paths: string[] = [];

    switch (platform) {
      case 'win32':
        // Windows paths
        paths.push(
          path.join(homedir, '.kube', 'config'),
          path.join(process.env.USERPROFILE || homedir, '.kube', 'config'),
          'C:\\Users\\' + (process.env.USERNAME || '') + '\\.kube\\config',
        );
        break;

      case 'darwin':
      case 'linux':
        // macOS and Linux paths
        paths.push(
          path.join(homedir, '.kube', 'config'),
          '/etc/kubernetes/admin.conf',
          path.join(homedir, '.kube', 'admin.conf'),
        );
        break;
    }

    // Add KUBECONFIG environment variable if set
    if (process.env.KUBECONFIG) {
      paths.unshift(...process.env.KUBECONFIG.split(path.delimiter));
    }

    return paths;
  }

  /**
   * 🐳 Discover services from Docker containers
   *
   * This method:
   * 1. Lists all running Docker containers
   * 2. Extracts service name, port, and cluster info from each container
   * 3. Creates a health check URL for each service
   * 4. Stores discovered services in the database
   *
   * Works on: Windows, macOS, Linux
   */
  async discoverDockerServices(): Promise<void> {
    if (!this.docker) {
      this.logger.debug(
        '⏭️ Skipping Docker discovery - client not initialized',
      );
      return;
    }

    try {
      const containers =
        (await this.docker.listContainers()) as unknown as DockerContainer[];
      await this.desc_all_service_logger.log(
        `🐳 Found ${containers.length} Docker containers.`,
      );

      const limit = pLimit(5);

      const tasks = containers.map((container) =>
        limit(async () => {
          const name = container.Names[0].replace('/', '');
          const cluster = container.Labels['cluster'] || 'docker-cluster';
          const ports = container.Ports.filter((p) => p.PublicPort);
          if (!ports.length) return;

          const hostname = this.getDockerHostname();
          const workingUrl = `http://${hostname}:${ports[0].PublicPort}`;
          const ai = await analyzeService({
            name,
            url: workingUrl,
            cluster,
            port: ports[0].PublicPort,
            image: container.Image,
            labels: container.Labels,
          });

          await this.prisma.service.upsert({
            where: { name_cluster: { name, cluster } },
            update: {
              url: ai.url,
              type: ai.type,
              description: ai.description,
            },
            create: {
              name,
              url: workingUrl,
              cluster,
              type: ai.type,
              description: ai.description,
            },
          });

          this.logger.log(`🧠 ${name} classified as ${ai.type}`);
        }),
      );

      await Promise.allSettled(tasks);
      this.logger.log('✅ Finished parallel Docker discovery.');
    } catch (error) {
      const err = error as Error;
      await this.desc_all_service_logger.error(
        `❌ Error discovering Docker services: ${err.message}`,
        err.stack,
      );
    }
  }

  /**
   * Get appropriate Docker hostname based on OS
   */
  private getDockerHostname(): string {
    const platform = os.platform();

    // On macOS and Windows Docker Desktop, use host.docker.internal
    // On Linux, use localhost
    if (platform === 'darwin' || platform === 'win32') {
      return 'host.docker.internal';
    }
    return 'localhost';
  }

  /**
   * ☸️ Discover services from Kubernetes cluster
   *
   * This method:
   * 1. Lists all services in the 'default' namespace
   * 2. Builds internal cluster DNS URLs for each service
   * 3. Stores discovered services in the database
   *
   * Works on: Windows, macOS, Linux, In-cluster
   *
   * Note: Uses Kubernetes internal DNS format:
   * http://<service-name>.<namespace>.svc.cluster.local:<port>/health
   */
  async discoverK8sServices(namespace: string = 'default'): Promise<void> {
    if (!this.k8sClient) {
      this.logger.debug('⏭️ Skipping K8s discovery - client not initialized');
      return;
    }

    try {
      // List all services in the specified namespace
      const response = await this.k8sClient.listNamespacedService({
        namespace,
      });
      const services = response.items as unknown as K8sService[];

      await this.desc_all_service_logger.log(
        `☸️ Found ${services.length} K8s services in namespace '${namespace}'.`,
      );
      const limit = pLimit(5);

      const tasks = services.map((svc) =>
        limit(async () => {
          const name = svc.metadata.name;
          const ns = svc.metadata.namespace;
          const cluster = `k8s-${ns}`; // Include namespace in cluster identifier
          const port = svc.spec.ports[0]?.port || 80;

          // Build Kubernetes internal DNS URL
          const url = `http://${name}.${ns}.svc.cluster.local:${port}`;
          let workingUrl = url;
          const ai = await analyzeService({
            name,
            url: url,
            cluster,
            port,
            labels: svc.metadata?.labels,
            image:
              svc.metadata?.annotations?.['kubernetes.io/created-by'] ?? '',
          });

          if (ai.url) {
            workingUrl = ai.url;
          }

          await this.prisma.service.upsert({
            where: { name_cluster: { name, cluster } },
            update: {
              url: workingUrl,
              type: ai.type,
              description: ai.description,
            },
            create: {
              name,
              url: workingUrl,
              cluster,
              type: ai.type,
              description: ai.description,
            },
          });
          this.logger.log(
            `🧠 ${name} classified as ${ai.type} (${ai.description})`,
          );
        }),
      );
      await Promise.allSettled(tasks);
    } catch (error) {
      const err = error as Error;
      await this.desc_all_service_logger.error(
        `❌ Error discovering Kubernetes services: ${err.message}`,
        err.stack,
      );
    }
  }

  /**
   * 🔍 Discover services from all namespaces
   */
  async discoverK8sServicesAllNamespaces(): Promise<void> {
    if (!this.k8sClient) {
      this.logger.debug('⏭️ Skipping K8s discovery - client not initialized');
      return;
    }

    try {
      // Get all namespaces
      const namespaceResponse = await this.k8sClient.listNamespace();
      const namespaces = namespaceResponse.items
        .map((ns) => ns.metadata?.name)
        .filter(Boolean) as string[];

      await this.desc_all_service_logger.log(
        `🔍 Discovering services across ${namespaces.length} namespaces...`,
      );

      // Discover services in each namespace
      for (const namespace of namespaces) {
        await this.discoverK8sServices(namespace);
      }
    } catch (error) {
      const err = error as Error;
      await this.desc_all_service_logger.error(
        `❌ Error discovering K8s services from all namespaces: ${err.message}`,
        err.stack,
      );
    }
  }

  /**
   * 🔍 Comprehensive service discovery
   *
   * Discovers services from both Docker and Kubernetes environments.
   * Works on Windows, macOS, and Linux.
   * This is typically called on application startup or scheduled periodically.
   */

  async discoverAllServices(
    includeAllNamespaces: boolean = false,
  ): Promise<void> {
    const platform = os.platform();
    await this.desc_all_service_logger.log(
      `🔍 Starting service discovery on ${platform}...`,
    );

    await this.discoverDockerServices();

    if (includeAllNamespaces) {
      await this.discoverK8sServicesAllNamespaces();
    } else {
      await this.discoverK8sServices();
    }
    const services: MockPrismaService[] = await this.prisma.service.findMany();
    const relations: ServiceRelationship[] =
      await analyzeRelationships(services);
    for (const rel of relations) {
      const from = await this.prisma.service.findFirst({
        where: { name: rel.from },
      });
      const to = await this.prisma.service.findFirst({
        where: { name: rel.to },
      });

      if (from && to) {
        const existing = await this.prisma.serviceDependency.findFirst({
          where: {
            fromServiceId: from.id,
            toServiceId: to.id,
          },
        });

        if (!existing) {
          await this.prisma.serviceDependency.create({
            data: {
              fromServiceId: from.id,
              toServiceId: to.id,
              reason: rel.reason,
            },
          });
          await this.desc_all_service_logger.log(
            `🔗 Stored relation: ${rel.from} → ${rel.to}`,
          );
        } else {
          await this.desc_all_service_logger.debug(
            `⏭️ Relation ${rel.from} → ${rel.to} already exists, skipping.`,
          );
        }
      }
    }

    await this.desc_all_service_logger.log(
      '✅ Discovery + AI relationship analysis completed',
    );
  }

  /**
   * 🔄 Get system information for debugging
   */
  getSystemInfo(): Record<string, any> {
    return {
      platform: os.platform(),
      arch: os.arch(),
      hostname: os.hostname(),
      dockerAvailable: this.docker !== null,
      k8sAvailable: this.k8sClient !== null,
      homeDir: os.homedir(),
    };
  }
}
