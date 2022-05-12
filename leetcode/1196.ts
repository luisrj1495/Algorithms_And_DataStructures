function maxNumberOfApples(weight: number[]): number {
  weight.sort((a, b) => a - b);
  let basket = 5000;
  let count = 0;

  for (let n of weight) {
    basket -= n;
    if (basket >= 0) count++;
    else break;
  }

  return count;
}
