function addToArrayForm(nums: number[], k: number): number[] {
  /**
   * - Get the num of the nums
   * - Sum the num plus k
   * - While rest
   *   - num % 10 = v -> Will be saved in the array in the position
   *
   * return the array
   */

  let num = k;
  let powValue = nums.length - 1;
  const result = [];

  for (let n of nums) {
    num += n * Math.pow(10, powValue);
    powValue--;
  }

  while (num) {
    result.push(num % 10);
    num = Math.floor(num / 10);
  }

  result.reverse();

  return result;
}

/**
 * [1,2,0,0], k = 34
 * const powValue = 4
 * let num = 0
 */
