function countElements(arr: number[]): number {
  const numsSet = new Set(arr);
  let count = 0;

  for (let n of arr) {
    if (numsSet.has(n + 1)) count++;
  }

  return count;
}
