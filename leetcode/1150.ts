function isMajorityElement(nums: number[], target: number): boolean {
  let frequency = 0;
  const middle = nums.length / 2;

  for (let n of nums) {
    if (target === n) frequency++;
  }

  return frequency > middle;
}
