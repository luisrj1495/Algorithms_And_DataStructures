function uniqueOccurrences(arr: number[]): boolean {
  const frequency = {};
  const occurrences = new Set();

  for (let n of arr) {
    frequency[n] = (frequency[n] || 0) + 1;
  }

  for (let n in frequency) {
    if (occurrences.has(frequency[n])) return false;
    occurrences.add(frequency[n]);
  }

  return true;
}
