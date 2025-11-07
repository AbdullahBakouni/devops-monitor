export class K8sMetricsUtil {
  /**
   * ✅ Convert CPU usage to % (rounded to 2 decimals)
   * Input can be:  nanocores, "100m", "1500000000n", "2.5"
   */
  static convertCpuToPercentage(cpu: string | number | bigint): number {
    let cores = 0;

    // Nanocores (number/bigint)
    if (typeof cpu === 'number' || typeof cpu === 'bigint') {
      cores = Number(cpu) / 1_000_000_000; // nanocores → cores
    } else {
      const cpuStr = cpu.toString().trim();

      if (cpuStr.endsWith('m')) {
        // 100m → 0.1 cores
        cores = parseFloat(cpuStr.replace('m', '')) / 1000;
      } else if (cpuStr.endsWith('n')) {
        // 1e9n → 1 core
        cores = parseFloat(cpuStr.replace('n', '')) / 1_000_000_000;
      } else {
        cores = parseFloat(cpuStr);
      }
    }

    const percent = cores * 100;

    // Avoid weird negative / scientific outputs
    if (!isFinite(percent) || percent < 0) return 0;

    return Number(percent.toFixed(2));
  }

  /**
   * ✅ Convert memory usage to MiB (rounded to 2 decimals)
   * Handles bytes, Ki, Mi, Gi
   */
  static convertMemoryToMiB(memory: string | number | bigint): number {
    let bytes = 0;

    if (typeof memory === 'number' || typeof memory === 'bigint') {
      bytes = Number(memory);
    } else {
      const memStr = memory.toString().toUpperCase().trim();

      if (memStr.endsWith('KI')) bytes = parseFloat(memStr) * 1024;
      else if (memStr.endsWith('MI')) bytes = parseFloat(memStr) * 1024 * 1024;
      else if (memStr.endsWith('GI'))
        bytes = parseFloat(memStr) * 1024 * 1024 * 1024;
      else if (/^\d+$/.test(memStr)) bytes = parseFloat(memStr); // plain bytes
    }

    const mib = bytes / (1024 * 1024);

    if (!isFinite(mib) || mib < 0) return 0;

    return Number(mib.toFixed(2));
  }
}
