function largestGoodInteger(num: string): string {
  /**
   * create max value
   * Loop until num.length - 3
   * get a substring(i, i+ 3)
   * check if all digits are equal using new Set().length === 1
   * - If it is, check which is max
   *
   * return max
   */

  let max = "";

  for (let i = 0; i <= num.length - 3; i++) {
    const sub = num.substring(i, i + 3);
    if (new Set(sub).size === 1) {
      if (sub > max) max = sub;
    }
  }

  return max;
}
