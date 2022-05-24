const isNumber = (letter: string) => {
  return letter.charCodeAt(0) >= 48 && letter.charCodeAt(0) <= 57;
};

function secondHighest(s: string): number {
  let max1 = -Infinity;
  let max2 = -Infinity;

  for (let letter of s) {
    if (isNumber(letter)) {
      const digit = +letter;
      if (digit > max1) {
        max2 = max1;
        max1 = digit;
      } else if (digit > max2 && digit !== max1) max2 = digit;
    }
  }

  console.log({ max1, max2 });

  return max2 === -Infinity || max1 === max2 ? -1 : max2;
}
