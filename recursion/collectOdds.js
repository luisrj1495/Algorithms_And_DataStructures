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

const collectOdds2 = (num) => {
  if (num <= 0) return [];
  num--;

  const arr = collectOdds2(num);

  if (num % 2 !== 0) arr.push(num);

  return arr
};


const collectOddsPureRecursion = (nums)