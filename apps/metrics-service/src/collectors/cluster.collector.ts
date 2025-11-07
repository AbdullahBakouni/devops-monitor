import { Injectable, Logger } from '@nestjs/common';
import { readFileSync, existsSync } from 'fs';

@Injectable()
export class ClusterDetector {
  private readonly logger = new Logger(ClusterDetector.name);
  private cachedClusterType: string | null = null;

  /**
   * Detects the cluster/orchestrator type
   * Returns: 'kubernetes', 'docker', 'docker-compose', or 'standalone'
   */
  detectCluster(): string {
    // Return cached result if already detected
    if (this.cachedClusterType) {
      return this.cachedClusterType;
    }

    // 1. Check for Kubernetes
    if (this.isKubernetes()) {
      this.cachedClusterType = 'kubernetes';
      this.logger.log('🎯 Detected cluster: Kubernetes');
      return this.cachedClusterType;
    }

    // 2. Check for Docker Compose
    if (this.isDockerCompose()) {
      this.cachedClusterType = 'docker-compose';
      this.logger.log('🎯 Detected cluster: Docker Compose');
      return this.cachedClusterType;
    }

    // 3. Check for Docker (single container)
    if (this.isDocker()) {
      this.cachedClusterType = 'docker';
      this.logger.log('🎯 Detected cluster: Docker');
      return this.cachedClusterType;
    }

    // 4. Default to standalone
    this.cachedClusterType = 'standalone';
    this.logger.log('🎯 Detected cluster: Standalone');
    return this.cachedClusterType;
  }

  /**
   * Check if running in Kubernetes
   */
  private isKubernetes(): boolean {
    // K8s mounts service account token
    if (existsSync('/var/run/secrets/kubernetes.io/serviceaccount/token')) {
      return true;
    }

    // K8s sets these env vars
    if (
      process.env.KUBERNETES_SERVICE_HOST ||
      process.env.KUBERNETES_SERVICE_PORT
    ) {
      return true;
    }

    // Check for K8s-specific env vars
    if (process.env.KUBERNETES_PORT) {
      return true;
    }

    return false;
  }

  /**
   * Check if running in Docker Compose
   */
  private isDockerCompose(): boolean {
    // Docker Compose sets this env var
    if (process.env.COMPOSE_PROJECT_NAME) {
      return true;
    }

    // Check if we're in Docker AND have compose-specific network
    if (this.isDocker()) {
      // Docker Compose typically creates networks with project name
      const hostname = process.env.HOSTNAME || '';
      // Compose container hostnames often contain service name + number
      if (hostname.match(/_\d+$/)) {
        return true;
      }
    }

    return false;
  }

  /**
   * Check if running in Docker (any type)
   */
  private isDocker(): boolean {
    // Check for .dockerenv file (Docker creates this)
    if (existsSync('/.dockerenv')) {
      return true;
    }

    // Check cgroup for docker
    try {
      if (existsSync('/proc/self/cgroup')) {
        const cgroup = readFileSync('/proc/self/cgroup', 'utf8');
        if (cgroup.includes('docker') || cgroup.includes('kubepods')) {
          return true;
        }
      }
    } catch (error) {
      // Ignore read errors
    }

    // Check if hostname looks like a container ID (12 hex chars)
    const hostname = process.env.HOSTNAME || '';
    if (hostname.match(/^[0-9a-f]{12}$/)) {
      return true;
    }

    return false;
  }

  /**
   * Get additional cluster metadata
   */
  getClusterMetadata(): {
    type: string;
    namespace?: string;
    podName?: string;
    nodeName?: string;
    composeProject?: string;
  } {
    const type = this.detectCluster();
    const metadata: {
      type: string;
      namespace?: string;
      podName?: string;
      nodeName?: string;
      composeProject?: string;
    } = { type };

    if (type === 'kubernetes') {
      metadata.namespace = process.env.KUBERNETES_NAMESPACE || 'default';
      metadata.podName = process.env.HOSTNAME;
      metadata.nodeName = process.env.NODE_NAME;
    }

    if (type === 'docker-compose') {
      metadata.composeProject = process.env.COMPOSE_PROJECT_NAME;
    }

    return metadata;
  }
}
