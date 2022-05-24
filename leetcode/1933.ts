function isDecomposable(s: string): boolean {
  /**
   * Group by tree and tree
   * if there less than two return false
   */

  const rta = [];
  let current = s[0];
  let count = 1;

  for (let index = 1; index < s.length + 1; index++) {
    if (current !== s[index]) {
      const trees = Math.floor(count / 3);
      rta.push(...Array.from({ length: trees }).map(() => current.repeat(3)));

      count = count - trees * 3;
      //console.log({ trees, rta });

      if (count === 2) rta.push(current.repeat(2));
      if (count === 1) return false;

      current = s[index];
      count = 0;
    }
    count++;
  }

  // console.log({ rta });

  return rta.filter((v) => v.length === 2).length === 1;
}
