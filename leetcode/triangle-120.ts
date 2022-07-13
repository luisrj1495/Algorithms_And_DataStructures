const findMinimumAndIndex = (nums: number[], start: number, end: number) => {
  let min = Infinity;
  let index = 0;

  for (let i = start; i < end; i++) {
    if (nums[i] === undefined) break;
    if (nums[i] < min) {
      min = nums[i];
      index = i;
    }
  }

  return { min, index };
};

function minimumTotal(triangle: number[][]): number {
  let sum = 0;
  let start = 0;
  let end = 1;

  for (let nums of triangle) {
    const { index, min } = findMinimumAndIndex(nums, start, end);
    sum += min;
    start = index
    end = Math.min(nums.length, index + 1);
  }

  return sum;
}
/**
 * [[-1],
 *  [2,3]
 * [1,-1,-3]]
 */
