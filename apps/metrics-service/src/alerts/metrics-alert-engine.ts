import { METRICS_ALERT_RULES, AlertRule } from './metrics-alert-rules';

export class MetricsAlertEngine {
  // { service: [{ cpu: x, memory: y, ts: time }] }
  private history = new Map<string, { [k: string]: number; ts: number }[]>();

  addSample(service: string, cpu: number, memory?: number) {
    const now = Date.now();
    const record: { [k: string]: number; ts: number } = { cpu, ts: now };
    if (memory !== undefined) {
      record.memory = memory;
    }
    const list = this.history.get(service) ?? [];

    list.push(record);

    const cutoff = now - 5 * 60 * 1000; // 5 min history window max
    this.history.set(
      service,
      list.filter((x) => x.ts >= cutoff),
    );
  }

  checkAlerts(service: string): { rule: AlertRule; value: number }[] {
    const data = this.history.get(service) ?? [];
    const alerts: { rule: AlertRule; value: number }[] = [];

    for (const rule of METRICS_ALERT_RULES) {
      // rule for specific service?
      if (rule.service && rule.service !== service) continue;

      const windowTs = Date.now() - rule.durationSec * 1000;
      const samples = data.filter((d) => d.ts >= windowTs);

      if (!samples.length) continue;

      const metricValues = samples.map((s) => s[rule.metric]).filter(Boolean);
      if (!metricValues.length) continue;

      // Window functions
      let evalValue = 0;
      switch (rule.windowFn) {
        case 'max':
          evalValue = Math.max(...metricValues);
          break;
        case 'min':
          evalValue = Math.min(...metricValues);
          break;
        case 'p95': {
          const sorted = [...metricValues].sort((a, b) => a - b);
          const idx = Math.floor(sorted.length * 0.95);
          evalValue = sorted[idx];
          break;
        }
        case 'avg':
        default:
          evalValue =
            metricValues.reduce((a, b) => a + b, 0) / metricValues.length;
      }

      // Comparison
      const condition =
        (rule.operator === '>' && evalValue > rule.value) ||
        (rule.operator === '<' && evalValue < rule.value);

      if (condition) {
        alerts.push({ rule, value: evalValue });
      }
    }

    return alerts;
  }
}
