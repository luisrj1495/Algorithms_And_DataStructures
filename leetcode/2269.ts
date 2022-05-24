function divisorSubstrings(num: number, k: number): number {
  let count = 0;
  const numStr = num.toString();

  for (let index = 0; index <= numStr.length - k; index++) {
    let substring = "";
    for (let j = 0; j < k; j++) {
      if (numStr[index + j]) substring += numStr[index + j];
    }

    if (substring.length === k) {
     const divisor = +substring
     if (num % divisor === 0 && divisor !== 0) count++
     console.log({ substring, index, divisor });
    }

  }

  return count;
}

/**
 * "240"
 */
