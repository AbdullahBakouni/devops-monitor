interface RCAInput {
  logs: { message: string; level: string }[];
  metrics: { cpu: number; memory: number; createdAt: Date }[];
  anomalies: { metric: string; value: number; ts: Date }[];
  riskScore: number;
}

export interface RCAResult {
  cause: string;
  confidence: number; // 0–100
}

export class RCAEngine {
  analyze(input: RCAInput): RCAResult {
    let cause = 'Unknown root cause';
    let confidence = 40;

    const hasOOM = input.logs.some((l) =>
      l.message.toLowerCase().includes('oom'),
    );
    const hasTimeout = input.logs.some((l) =>
      l.message.toLowerCase().includes('timeout'),
    );
    const highCpu = input.metrics.some((m) => m.cpu > 90);
    const highMem = input.metrics.some((m) => m.memory > 90);
    const hasAnomaly = input.anomalies.length > 0;

    if (hasOOM) {
      cause = 'OutOfMemory: process killed by kernel due to memory pressure';
      confidence = 90;
    } else if (highMem) {
      cause = 'Memory saturation, possible memory leak or large payloads';
      confidence = 80;
    } else if (highCpu) {
      cause = 'CPU saturation, heavy computations or tight loop';
      confidence = 75;
    } else if (hasTimeout) {
      cause = 'Timeouts detected: slow downstream dependency or DB under load';
      confidence = 70;
    } else if (hasAnomaly) {
      cause = 'Anomaly in resource usage detected by ML engine';
      confidence = 80;
    }

    if (input.riskScore > 80 && confidence < 80) {
      confidence = 80;
    }

    return { cause, confidence };
  }
}
