function arrangeCoins(n: number): number {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    n = n - i;
    if (n >= 0) count++;
  }

  return count;
}

/**
 * 5
 * 1
 * 5 -1 = 4 +1
 * 4 - 2 = 2 +1
 * 2 - 3 = -1
 *
 *
 *
 *
 */
