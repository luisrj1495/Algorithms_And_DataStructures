/**
 *
 * @param {Array<number>} nums
 */
function countUniqueValues(nums) {
  let i = 0;

  if (!nums.length) return 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      let tmp = nums[i];
      nums[i] = nums[j];
      nums[j] = tmp;
    }
  }

  return i + 1;
}
/**
 * i
 * [1,1,1,1,1,1,1,1,1]
 *                  j
 *
 *
 */
