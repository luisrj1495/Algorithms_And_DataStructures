function addDigits(num: number): number {
  const numStr = num.toString();

  if (numStr.length === 1) return +numStr;

  let newNum = numStr.split("").reduce((acc, n) => (acc += +n), 0);

  return addDigits(newNum) + 1;
}

function addDigits2(num: number): number {
 return num < 10 ? num : num % 9 || 9;
};

addDigits(38)
