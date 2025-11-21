// failure-predictor.engine.ts
export interface FailurePredictInput {
  trendCpu: number;
  trendMemory: number;
  anomalies24h: number;
  failures24h: number;
}

export interface FailurePredictionResult {
  probability: number; // 0–1
  reason: string;
}

export class FailurePredictor {
  predict(input: FailurePredictInput): FailurePredictionResult {
    let p = 0;

    if (input.trendCpu > 0) p += Math.min(input.trendCpu * 0.15, 0.3);
    if (input.trendMemory > 0) p += Math.min(input.trendMemory * 0.15, 0.3);

    p += Math.min(input.anomalies24h * 0.08, 0.25);
    p += Math.min(input.failures24h * 0.12, 0.25);

    if (p > 1) p = 1;

    let reason = 'Low failure risk based on current trends';

    if (p > 0.7) {
      reason =
        'High failure probability: rising CPU/memory trends and recent anomalies';
    } else if (p > 0.4) {
      reason =
        'Moderate risk: some anomalies and upward trend in resource usage';
    }

    return { probability: p, reason };
  }
}
