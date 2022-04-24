function sumOfUnique(nums: number[]): number {
  /**
   * - create a variable called numsMap to save the frequency of each number
   * - Loop nums and save its frequency
   * - Loop the object and sum the values that are equal to 1 in its value
   * - return the sum
   */

  let sum = 0;
  const numsMap: Record<number, number> = {};

  for (let n of nums) {
    numsMap[n] = (numsMap[n] || 0) + 1;
  }

  for (let n in numsMap) {
   if (numsMap[n] === 1) sum += +n
  }

  return sum;
}
