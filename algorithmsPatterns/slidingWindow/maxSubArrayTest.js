/**
 * Given an array of integers and a number, write a function called  maxSubarraySum
 * , which finds the maximum sum of a subarray with the length of the number passed to the function.
 */
const maxSubarraySum = (arr, target) => {
  let max = 0;
  let acc = 0;

  if (arr.length < target) return null;

  for (let i = 0; i < target; i++) {
    acc += arr[i];
  }
  max = acc;

  for (let i = target; i < arr.length; i++) {
    acc = acc + arr[i] - arr[i - target];

    //console.log({acc, current: arr[i], before:arr[i - target], i, max })
    max = Math.max(max, acc);
  }

  return max;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
