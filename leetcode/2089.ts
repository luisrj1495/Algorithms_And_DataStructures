function targetIndices(nums: number[], target: number): number[] {
  /**
   * Create an array called indices
   * Order the array
   * loop the nums
   *  - if the current num is equal to target
   *    - Then: add the index in indices
   * return indices
   *
   */

  const indices = [];
  nums.sort();

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === target) indices.push(index);
  }

  return indices;
}
