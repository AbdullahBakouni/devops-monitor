export interface RiskInput {
  avgCpu: number;
  avgMemory: number;
  failuresLastHour: number;
  anomalyCount: number;
  forecastCpu?: number;
  forecastMemory?: number;
}

export interface RiskResult {
  score: number; // 0–100
  level: 'NORMAL' | 'WARNING' | 'CRITICAL';
  reason: string;
}

export class RiskEngine {
  calculate(input: RiskInput): RiskResult {
    let score = 0;
    const reasons: string[] = [];

    if (input.avgCpu > 70) {
      score += 15;
      reasons.push('CPU > 70%');
    }
    if (input.avgCpu > 85) {
      score += 15;
      reasons.push('CPU > 85%');
    }

    if (input.avgMemory > 70) {
      score += 15;
      reasons.push('Memory > 70%');
    }
    if (input.avgMemory > 85) {
      score += 15;
      reasons.push('Memory > 85%');
    }

    if (input.failuresLastHour > 0) {
      score += 20;
      reasons.push('Recent failures');
    }

    if (input.anomalyCount > 0) {
      score += 20;
      reasons.push('ML anomalies detected');
    }

    if (input.forecastCpu && input.forecastCpu > 90) {
      score += 10;
      reasons.push('Forecast CPU > 90%');
    }

    if (input.forecastMemory && input.forecastMemory > 90) {
      score += 10;
      reasons.push('Forecast memory > 90%');
    }

    if (score > 100) score = 100;

    let level: RiskResult['level'] = 'NORMAL';
    if (score >= 60) level = 'WARNING';
    if (score >= 80) level = 'CRITICAL';

    return {
      score,
      level,
      reason: reasons.length ? reasons.join(', ') : 'Healthy',
    };
  }
}
