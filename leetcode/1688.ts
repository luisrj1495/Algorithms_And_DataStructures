function numberOfMatches(n: number): number {
  /**
   * create a matches variable equal to zero
   * while number
   * - if the number is even
   *   - matches += number / 2
   *   - number -= number / 2
   * - if the number is odd
   *  - number -= 1
   *  - mathces+= number / 2
   *  - number += number / 2
   * return matches
   */

  let matches = 0;

  while (n) {
    // is odd
    if (n % 2 !== 0) {
      n -= 1;
    }
    const newMatches = n / 2;
    matches += newMatches;
    n -= newMatches;
  }

  return matches
}
