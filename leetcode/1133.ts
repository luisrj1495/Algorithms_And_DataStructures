function largestUniqueNumber(nums: number[]): number {
  const numsMap = {};
  let max = -1;

  for (let n of nums) {
    numsMap[n] = (numsMap[n] || 0) + 1;
  }

  for (let n in numsMap) {
    const nParsed = +n;
    if (numsMap[n] == 1 && nParsed > max) {
      max = nParsed;
    }
  }

  return max;
}
