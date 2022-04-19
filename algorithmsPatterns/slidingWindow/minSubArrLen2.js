const minSubArrLen = (arr, target) => {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (total < target && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= target) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }

  return minLen;
};
