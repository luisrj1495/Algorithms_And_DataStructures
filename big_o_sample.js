function addUpTo(n) {
   /**
   * TIME:  O(n)
   */
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpTo2(n) {
  /**
   * TIME:  O(1)
   */
  return (n * (n + 1)) / 2;
}

const t1 = performance.now();
addUpTo2(1000000000);
const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
