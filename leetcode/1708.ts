function largestSubarray(nums: number[], k: number): number[] {
  const result: number[] = [];
  let indexOfMaxValue = -1;
  let maxValue = -Infinity;

  for (let i = 0; i < nums.length - k; i++) {
    if (nums[i] > maxValue) {
      maxValue = nums[i];
      indexOfMaxValue = i;
    }
  }

  const diff = nums.length - indexOfMaxValue;
  const startPoint = diff >= k ? indexOfMaxValue : diff + indexOfMaxValue - k;

  for (let i = startPoint; i < startPoint + k; i++) {
    result.push(nums[i]);
  }

  return result;
}

/**
 * [1,2,3,4,5,6,90,1]
 * indexOfMaxValue = 6
 * length = 8 - 1 = 7;
 * k=4
 * length - indexOfMaxValue = 1
 * - if esa resta es mayor o igual que k
 *    - Empiezo desde ahi hasta k
 *  -else
 *   - (length - indexOfMaxValue) + indexOfMaxValue - k +  = 8 -4 = 4
 *
 *
 *
 */
