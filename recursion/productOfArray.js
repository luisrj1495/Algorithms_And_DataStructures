/**
 *
 * @param {number[]} nums
 */
const productOfArray = (nums) => {
  let total = 1;

  const helper = (list) => {
    if (!list.length) return;

    total *= list[0];

    helper(list.slice(1));
  };

  helper(nums);

  return total;
};

const productOfArray2 = (nums) => {
 if (!nums.length) return 1

 return nums[0] * productOfArray(nums.slice(1))
}
