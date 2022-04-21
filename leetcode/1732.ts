function largestAltitude(gain: number[]): number {
  /**
   * create a variable called max equal to zero
   * create a variable called total equal to zero
   * Loop the array and sum the current num ot total and calculate the max
   * return max
   */

  let max = 0;
  let total = 0;

  for (let n of gain) {
    total += n;
    max = Math.max(max, total);
  }

  return max;
}
