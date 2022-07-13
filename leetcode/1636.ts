const isIncreasing = (frequency: object) => {
  const match = new Set();

  for (let key in frequency) {
    if (match.has(frequency[key])) return false;
    match.add(frequency[key]);
  }

  return true;
};
/** Did not pass */
function frequencySort(nums: number[]): number[] {
  const frequency = {};

  for (let n of nums) frequency[n] = (frequency[n] || 0) + 1;

  const increasing = isIncreasing(frequency);

  return Object.keys(frequency)
    .sort((a, b) =>
      increasing ? frequency[a] - frequency[b] : frequency[b] - frequency[a]
    )
    .reduce<number[]>((acc, num) => {
      const length = frequency[num];
      const n = +num;
      acc.push(...Array.from({ length }, () => n));
      return acc;
    }, []);
}
