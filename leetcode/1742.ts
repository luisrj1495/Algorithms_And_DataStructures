const sumDigits = (n: number): number => {
  let sum = 0;

  while (n) {
    const lastDigit = n % 10;
    n = Math.floor(n / 10);
    sum += lastDigit;
  }

  return sum;
};

function countBalls(lowLimit: number, highLimit: number): number {
  const boxes: Record<number, number> = {};
  let maxCount = -1;

  for (let i = lowLimit; i <= highLimit; i++) {
    const value = sumDigits(i);
    boxes[value] = (boxes[value] || 0) + 1;
  }

  for (let boxKey in boxes) {
    if (boxes[boxKey] > maxCount) maxCount = boxes[boxKey];
  }

  return maxCount;
}
