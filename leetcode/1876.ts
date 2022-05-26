function countGoodSubstrings(s: string): number {
  /**
   * Create a count
   * loop the s until s.length - 3
   * get the subString(i, i +3)
   * check if they are distinc
   *  - if true, count
   * return count
   */

  let count = 0;

  for (let i = 0; i <= s.length - 3; i++) {
    const set = new Set();
    set.add(s[i]);
    set.add(s[i + 1]);
    set.add(s[i + 2]);

    if (set.size === 3) count++;
  }

  return count;
}
