/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const counts: Record<number, number> = {};
  for (let n of nums) {
    counts[n] = (counts[n] || 0) + 1;
  }

  const deleteCount = (num: number, index: number) => {
    nums[index] = num;
    counts[num] = counts[num] - 1;
  };

  for (let i = 0; i < nums.length; i++) {
    if (counts[0]) {
      deleteCount(0, i);
      continue;
    }

    if (counts[1]) {
      deleteCount(1, i);
      continue;
    }

    if (counts[2]) {
      deleteCount(2, i);
      continue;
    }
  }
}
