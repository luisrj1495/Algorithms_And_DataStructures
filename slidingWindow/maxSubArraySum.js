const maxSubArraySum = (arr, n) => {
  let max = 0;

  if (!arr.length) return null;

  for (let i = 0; i < n; i++) {
    max += arr[i];
  }

  for (let i = n; i < arr.length; i++) {
    const current = max - arr[i - n] + arr[i];
    max = Math.max(max, current);
  }

  return max;
};

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubArraySum([], 2));
