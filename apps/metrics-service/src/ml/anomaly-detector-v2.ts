import { Inject, Injectable, Logger } from '@nestjs/common';
import { ANOMALY_DETECTOR_OPTIONS } from './anomaly-detector.constants';

/**
 * Options for configuring the Anomaly Detector.
 */
export interface AnomalyDetectorOptions {
  // Exponentially Weighted Moving Average (EWMA) parameters
  /**
   * Alpha for EWMA mean calculation. A smaller value (e.g., 0.05-0.3) results in a smoother baseline.
   */
  alphaMean?: number;
  /**
   * Alpha for EWMA variance calculation. Controls the smoothing of variance.
   */
  alphaVar?: number;

  // Robust bands parameters
  /**
   * Multiplier for the Interquartile Range (IQR) to define robust anomaly bands (e.g., 1.5-3.0).
   */
  iqrMultiplier?: number;
  /**
   * Z-score threshold for anomaly detection (e.g., 2.5-4.0 standard deviations).
   */
  zThreshold?: number;

  // Seasonality parameters
  /**
   * Enables or disables seasonality detection.
   */
  enableSeasonality?: boolean;
  /**
   * Number of buckets for seasonality. For example, 60 for minute-of-the-hour seasonality.
   */
  seasonalityBuckets?: number;
  /**
   * Minimum number of samples required before the model is considered warmed up and can detect anomalies.
   */
  minWarmup?: number;

  // Scoring and cooldown parameters
  /**
   * Amount to increase the anomaly score when an anomaly is detected.
   */
  scoreIncrease?: number;
  /**
   * Amount to decrease the anomaly score for each normal measurement.
   */
  scoreDecay?: number;
  /**
   * Minimum interval in milliseconds between consecutive alerts of the same type to prevent spamming.
   */
  minIntervalMs?: number;
}

/**
 * Result of an anomaly detection operation.
 */
export interface AnomalyResult {
  /**
   * True if an anomaly is detected, false otherwise.
   */
  anomaly: boolean;
  /**
   * Cumulative anomaly score, indicating the severity of past anomalies.
   */
  score: number;
  /**
   * The expected baseline value.
   */
  expected: number | null;
  /**
   * The difference between the actual value and the expected baseline.
   */
  deviation: number;
  /**
   * The lower bound of the acceptable range.
   */
  bandLow: number | null;
  /**
   * The upper bound of the acceptable range.
   */
  bandHigh: number | null;
  /**
   * A simplified explanation for the anomaly reason.
   */
  reason: string;
  /**
   * Indicates if the model has received enough samples to be considered warmed up.
   */
  warmedUp: boolean;
}

/**
 * Internal state for a single service/metric series.
 */
interface SeriesState {
  // EWMA baseline
  /**
   * Exponentially Weighted Moving Average of the mean.
   */
  mean: number | null;
  /**
   * Exponentially Weighted Moving Average of the variance.
   */
  var: number | null;

  // Short window for quick percentile/MAD calculation
  /**
   * A sliding window of recent values for robust statistics.
   */
  window: number[];

  // Scoring and cooldown
  /**
   * Current anomaly score for this series.
   */
  score: number;
  /**
   * Timestamp of the last alert for this series, used for cooldown.
   */
  lastAlertAt?: number;

  // Simple seasonality: different baseline for each bucket
  /**
   * Seasonal baselines, if seasonality is enabled.
   */
  seasonal?: Array<{ mean: number | null; var: number | null; count: number }>;
  /**
   * Total number of samples processed for this series.
   */
  count: number;
}

@Injectable()
export class AnomalyDetectorV2 {
  private readonly logger = new Logger(AnomalyDetectorV2.name);

  // Stores the state for each unique service-metric key (e.g., "my-service:cpu")
  private state = new Map<string, SeriesState>();

  constructor(
    @Inject(ANOMALY_DETECTOR_OPTIONS)
    private readonly opts: AnomalyDetectorOptions,
  ) {
    // Set default options if not provided
    this.opts.alphaMean ??= 0.15;
    this.opts.alphaVar ??= 0.15;
    this.opts.iqrMultiplier ??= 2.5;
    this.opts.zThreshold ??= 3.0;
    this.opts.enableSeasonality ??= true;
    this.opts.seasonalityBuckets ??= 60;
    this.opts.minWarmup ??= 20;
    this.opts.scoreIncrease ??= 1.0;
    this.opts.scoreDecay ??= 0.25;
    this.opts.minIntervalMs ??= 60_000; // 1 minute
  }

  /**
   * Adds a new data sample to the anomaly detector for a specific service and metric.
   * This updates the EWMA baseline and robust statistics window.
   *
   * @param service The name of the service.
   * @param metric The metric name (e.g., 'cpu' or 'memory').
   * @param value The numerical value of the metric.
   * @param at The timestamp of the sample (defaults to Date.now()).
   */
  addSample(
    service: string,
    metric: 'cpu' | 'memory',
    value: number,
    at = Date.now(),
  ): void {
    const key = `${service}:${metric}`;
    const s = this.ensureState(key);
    s.count++;
    s.window.push(value);
    // Keep the window size limited (e.g., last 120 samples)
    if (s.window.length > 120) s.window.shift();

    // Determine the seasonal bucket index if seasonality is enabled
    const bucketIdx = this.opts.enableSeasonality ? this.bucketIndex(at) : null;

    // Select the appropriate baseline (seasonal or global)
    const baseline = this.selectBaseline(s, bucketIdx);

    // Update EWMA mean and variance
    const alphaM = this.opts.alphaMean!;
    const alphaV = this.opts.alphaVar!;

    const prevMean = baseline.mean;
    const prevVar = baseline.var;

    if (prevMean === null) {
      // Initialize mean and variance for the first sample
      baseline.mean = value;
      baseline.var = 0; // Start with zero variance
    } else {
      const diff = value - prevMean;
      baseline.mean = prevMean + alphaM * diff;
      // Calculate new variance, ensuring it's not negative
      const variance = (1 - alphaV) * (prevVar ?? 0) + alphaV * diff * diff;
      baseline.var = Math.max(variance, 1e-6); // Prevent zero variance
    }

    // If seasonality is enabled, store the updated baseline in the specific bucket
    if (bucketIdx !== null && s.seasonal) {
      s.seasonal[bucketIdx] = {
        mean: baseline.mean,
        var: baseline.var,
        count: (s.seasonal[bucketIdx]?.count ?? 0) + 1,
      };
    }

    // Gradually decay the anomaly score over time for normal samples
    s.score = Math.max(0, s.score - this.opts.scoreDecay!);
  }

  /**
   * Detects anomalies for a given data point.
   *
   * @param service The name of the service.
   * @param metric The metric name (e.g., 'cpu' or 'memory').
   * @param value The numerical value of the metric.
   * @param at The timestamp of the sample (defaults to Date.now()).
   * @returns An AnomalyResult object indicating if an anomaly was detected and related details.
   */
  detect(
    service: string,
    metric: 'cpu' | 'memory',
    value: number,
    at = Date.now(),
  ): AnomalyResult {
    const key = `${service}:${metric}`;
    const s = this.ensureState(key);

    const warmedUp = s.count >= this.opts.minWarmup!;
    const bucketIdx = this.opts.enableSeasonality ? this.bucketIndex(at) : null;
    const baseline = this.selectBaseline(s, bucketIdx);
    const mean = baseline.mean;
    const variance = baseline.var;

    // Calculate robust statistics (IQR, median, MAD) from the sliding window
    const { iqr, median, mad } = this.robustStats(s.window);
    const iqrBand = iqr !== null ? this.opts.iqrMultiplier! * iqr : null;
    const madBand = mad !== null ? 3.5 * 1.4826 * mad : null; // Approximately 3.5 * MAD

    // Determine the upper and lower bounds for anomaly detection
    const bandLow =
      median !== null && iqrBand !== null
        ? median - iqrBand
        : median !== null && madBand !== null
          ? median - madBand
          : null;
    const bandHigh =
      median !== null && iqrBand !== null
        ? median + iqrBand
        : median !== null && madBand !== null
          ? median + madBand
          : null;

    let anomaly = false;
    let reason = '';
    const expected: number | null = mean;
    const deviation = expected !== null ? value - expected : 0;

    // If the model is not warmed up or baseline is not available, return a normal result
    if (!warmedUp || mean === null || variance === null) {
      return {
        anomaly: false,
        score: s.score,
        expected: expected,
        deviation,
        bandLow,
        bandHigh,
        reason: 'warming_up',
        warmedUp,
      };
    }

    // Calculate the Z-score
    const std = Math.max(Math.sqrt(variance), 1e-6); // Ensure standard deviation is not zero
    const z = Math.abs(deviation / std);

    // Check if the value is outside the robust bands
    const outOfBand =
      (bandHigh !== null && value > bandHigh) ||
      (bandLow !== null && value < bandLow);

    // Determine if an anomaly is detected based on Z-score or robust bands
    if (z >= this.opts.zThreshold! || outOfBand) {
      anomaly = true;
      reason = outOfBand
        ? 'outside_robust_band'
        : `z=${z.toFixed(2)}≥${this.opts.zThreshold}`;
    }

    // Apply cooldown to prevent alert spamming
    const now = Date.now();
    const canAlert =
      !s.lastAlertAt || now - s.lastAlertAt >= this.opts.minIntervalMs!;
    if (anomaly && canAlert) {
      s.score += this.opts.scoreIncrease!;
      s.lastAlertAt = now;
    } else if (anomaly && !canAlert) {
      // Anomaly detected, but still within cooldown period, so suppress alert
      anomaly = false;
      reason = 'cooldown';
    }

    return {
      anomaly,
      score: s.score,
      expected,
      deviation,
      bandLow,
      bandHigh,
      reason: reason || (anomaly ? 'anomaly' : 'normal'), // Default reason if not set
      warmedUp,
    };
  }

  // ======== Helper Methods ========

  /**
   * Ensures that a state object exists for the given key, creating it if necessary.
   *
   * @param key The unique key for the service-metric series.
   * @returns The SeriesState object.
   */
  private ensureState(key: string): SeriesState {
    let s = this.state.get(key);
    if (!s) {
      s = {
        mean: null,
        var: null,
        window: [],
        score: 0,
        count: 0,
        seasonal: this.opts.enableSeasonality
          ? Array.from({ length: this.opts.seasonalityBuckets! }, () => ({
              mean: null,
              var: null,
              count: 0,
            }))
          : undefined,
      };
      this.state.set(key, s);
    }
    return s;
  }

  /**
   * Calculates the seasonal bucket index based on the timestamp.
   *
   * @param at The timestamp.
   * @returns The seasonal bucket index (0 to seasonalityBuckets-1).
   */
  private bucketIndex(at: number): number {
    const d = new Date(at);
    // For minute-of-the-hour seasonality (0-59)
    return d.getMinutes() % this.opts.seasonalityBuckets!;
  }

  /**
   * Selects the appropriate baseline for anomaly detection.
   * If a sufficiently warmed-up seasonal bucket exists, it is used; otherwise, the global baseline is used.
   *
   * @param s The SeriesState for the current series.
   * @param bucketIdx The seasonal bucket index.
   * @returns An object containing the mean and variance for the selected baseline.
   */
  private selectBaseline(
    s: SeriesState,
    bucketIdx: number | null,
  ): { mean: number | null; var: number | null } {
    if (bucketIdx !== null && s.seasonal) {
      const b = s.seasonal[bucketIdx];
      // Use seasonal baseline if it's sufficiently warmed up (at least 5 samples or 1/3 of minWarmup)
      if (b && b.count >= Math.max(5, this.opts.minWarmup! / 3)) {
        return { mean: b.mean, var: b.var };
      }
    }
    // Fallback to global baseline if no seasonal baseline is available or warmed up
    return { mean: s.mean, var: s.var };
  }

  /**
   * Calculates robust statistics (IQR, median, MAD) for a given array of numbers.
   *
   * @param arr The array of numbers.
   * @returns An object containing the IQR, median, and MAD.
   */
  private robustStats(arr: number[]) {
    if (!arr.length) {
      return { iqr: null, median: null, mad: null };
    }
    const sorted = [...arr].sort((a, b) => a - b);

    // Helper function to calculate a percentile (quantile)
    const q = (p: number) => {
      const idx = (sorted.length - 1) * p;
      const lo = Math.floor(idx);
      const hi = Math.ceil(idx);
      if (lo === hi) return sorted[lo];
      return sorted[lo] * (hi - idx) + sorted[hi] * (idx - lo);
    };

    const median = q(0.5);
    const p25 = q(0.25); // 25th percentile
    const p75 = q(0.75); // 75th percentile
    const iqr = p75 - p25; // Interquartile Range

    // MAD: Median Absolute Deviation
    // median(|x - median|)
    const abs = sorted.map((v) => Math.abs(v - median));
    const mad = abs.length
      ? abs.sort((a, b) => a - b)[Math.floor(abs.length / 2)]
      : 0;

    return { iqr, median, mad };
  }
}
