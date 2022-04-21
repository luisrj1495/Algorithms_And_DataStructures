/**
 *
 * @param {number[]} nums
 */

const collectOdds = (nums) => {
  const result = [];

  const helper = (helperInput) => {
    if (!helperInput.length) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  };

  helper(nums);

  return result;
};
