export class AnomalyDetector {
  private ema: Map<string, number> = new Map();
  private alpha = 0.2;

  detect(service: string, metric: string, value: number) {
    const key = `${service}:${metric}`;
    const prev = this.ema.get(key) || value;

    const newEma = this.alpha * value + (1 - this.alpha) * prev;
    this.ema.set(key, newEma);

    const diff = value - newEma;

    const alertThreshold = newEma * 1.5;

    if (value > alertThreshold) {
      return {
        anomaly: true,
        expected: newEma,
        actual: value,
        deviation: diff,
      };
    }

    return { anomaly: false };
  }
}
