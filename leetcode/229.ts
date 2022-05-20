function majorityElement(nums: number[]): number[] {
  const frequency = {};
  const rta: number[] = [];
  const check = nums.length / 3;

  for (let n of nums) {
    frequency[n] = (frequency[n] || 0) + 1;
  }

  for (let n in frequency) {
    if (frequency[n] > check) rta.push(+n);
  }

  return rta
}
