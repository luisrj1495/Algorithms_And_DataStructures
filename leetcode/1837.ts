function sumBase(n: number, k: number): number {
  /**
   * Example: 34 base 6
   * 34 % 6 = 4 | 34 / 6 = 5.8
   * 5 % 6 = 5 | 5 / 6 = 0.08
   * so 34 in base 6 is 54
   */

  /**
   * - create an array called mods
   * - create a variable called rta = 0
   * - While n
   *   - get the mod between n % k and add it to mods
   *   - n = n / k only the integer
   * - Loop the mods from end to start
   *   - Sum the value to total
   * - Return total
   */

  let total = 0;

  while (n) {
    total += n % k;

    n = Math.floor(n / k);
  }

  return total;
}
