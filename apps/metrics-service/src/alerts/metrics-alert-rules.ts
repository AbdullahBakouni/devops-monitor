// metrics-alert-rules.ts

export interface AlertRule {
  id: string;
  name: string;
  service?: string;
  metric: 'cpu' | 'memory';
  operator: '>' | '<';
  value: number; // Threshold
  durationSec: number;
  severity: 'INFO' | 'WARNING' | 'CRITICAL';
  windowFn?: 'avg' | 'max' | 'min' | 'p95';
}

export const METRICS_ALERT_RULES: AlertRule[] = [
  {
    id: 'cpu_high_avg',
    name: 'High CPU Average Usage',
    metric: 'cpu',
    operator: '>',
    value: 80,
    durationSec: 60,
    severity: 'CRITICAL',
    windowFn: 'avg',
  },
  {
    id: 'cpu_spike_max',
    name: 'CPU Spike (Max)',
    metric: 'cpu',
    operator: '>',
    value: 90,
    durationSec: 30,
    severity: 'WARNING',
    windowFn: 'max',
  },
  {
    id: 'memory_high_avg',
    name: 'High Memory Usage',
    metric: 'memory',
    operator: '>',
    value: 75,
    durationSec: 120,
    severity: 'WARNING',
    windowFn: 'avg',
  },
];
