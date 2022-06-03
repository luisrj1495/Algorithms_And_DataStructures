const getDigit = (num, position) => {
  while (position) {
    num = Math.floor(num / 10);
    position--;
  }

  return num === 0 ? undefined : num % 10;
};

const digitCount = (num) => {
  let digits = 0;

  while (Math.abs(num)) {
    num = Math.floor(num / Math.pow(10, digits));
    digits++;
  }

  return digits + 1;
};

const createBucket = () => {
  const buckets = {};
  const digits = new Set();

  const add = (digit, num) => {
    const digitParsed = digit || 0;
    if (!buckets[digitParsed]) buckets[digitParsed] = [];

    digits.add(digitParsed);

    buckets[digitParsed].push(num);
  };

  const flat = () => {
    const data = [];

    for (let digit in buckets) {
      data.push(...buckets[digit]);
    }

    return data;
  };

  const hasValues = () => {
    return digits.size !== 1;
  };

  return {
    add,
    flat,
    hasValues,
  };
};

const radix1 = (arr) => {
  let arrCopy = [...arr];
  let position = 0;
  let hasValue = true;

  while (hasValue) {
    const buckets = createBucket();
    for (let n of arrCopy) {
      const digit = getDigit(n, position);
      buckets.add(digit, n);
    }
    hasValue = buckets.hasValues();
    arrCopy = buckets.flat();
    position++;
    console.log({ arrCopy, position, buckets });
  }

  return arrCopy;
};

// console.log(getDigit(12345, 0));
// console.log(getDigit(12345, 1));
// console.log(getDigit(12345, 2));
// console.log(getDigit(12345, 3));
// console.log(getDigit(12345, 4));
// console.log(getDigit(12345, 5));
// console.log(getDigit(12345, 6));

// console.log(radix([200, 500, 1, 3, 5, 5, 563]));

// console.log(digitCount(12345));

/**
 * Version 2
 */

const createBucket2 = () => {
  const buckets = {};

  const add = (digit, num) => {
    if (!buckets[digit]) buckets[digit] = [];
    buckets[digit].push(num);
  };

  const flat = () => {
    const data = [];

    for (let digit in buckets) {
      data.push(...buckets[digit]);
    }

    return data;
  };

  return {
    add,
    flat,
  };
};

const digitCount2 = (num) => {
  if (num == 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const getDigit2 = (num, position) => {
  return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
};

const mostDigits = (arr) => {
  return digitCount2(Math.max(...arr));
};

const radix2 = (arr) => {
  let digitsCount = mostDigits(arr);

  while (digitsCount) {
    const buckets = createBucket();
    for (let n of arr) {
      const digit = getDigit2(n, digitsCount);
      buckets.add(digit, n);
    }
    arr = buckets.flat();
    digitsCount--;
  }

  return arr;
};

const radix3 = (arr) => {
  const maxDigits = mostDigits(arr);

  for (let k = 0; k < maxDigits; k++) {
    const buckets = Array.from({ length: 10 }, () => [])
    for (let n of arr) {
      const digitIndex = getDigit2(n, k);
      buckets[digitIndex].push(n);
    }
    arr = buckets.flat();
    // Or arr = [].concat(...buckets)
  }

  return arr;
};

console.log(radix3([200, 500, 1, 3, 5, 5, 563]));

/**
 * Time Complexity: O(kn)
 * Space Complexity: O(n + k)
 */