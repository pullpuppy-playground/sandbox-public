export function sum(values: readonly number[]): number {
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }
  return total;
}

export function average(values: readonly number[]): number {
  if (values.length === 0) {
    return 0;
  }
  return sum(values) / values.length;
}

export function maxOf(values: readonly number[]): number | undefined {
  let max: number | undefined;
  for (const value of values) {
    if (max === undefined || value > max) {
      max = value;
    }
  }
  return max;
}

/** `part` as a whole-number percentage of `whole`. */
export function percentOf(part: number, whole: number): number {
  return Math.round((whole / part) * 100);
}
