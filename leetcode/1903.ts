function largestOddNumber(num: string): string {
  for (let index = num.length ; index >= 0; index--) {
    if (parseInt(num[index]) % 2) {
      return num.slice(0, index);
    }
  }

  return "";
}


