function findGCD(nums: number[]): number {
  let max = -Infinity;
  let min = Infinity;

  for (let n of nums) {
    if (n > max) max = n;

    if (n < min) min = n;
  }

  let greatDivisor = min;

  while (greatDivisor) {
    if (
     max % greatDivisor === 0 &&
     min % greatDivisor === 0
    )
      return greatDivisor;
    greatDivisor--;
  }

  return 1;
}
