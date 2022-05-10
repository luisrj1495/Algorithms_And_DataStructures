const isSelfDiving = (num: number) => {
  for (let n of num.toString()) {
    if (num % +n !== 0) return false;
  }

  return true;
};

const isSelfDiving2 = (num: number) => {
  let copy = num;

  while (copy) {
    const divisor = copy % 10;
    if (num % divisor !== 0) return false;
    copy = Math.floor(copy / 10);
  }

  return true;
};

function selfDividingNumbers(left: number, right: number): number[] {
  /**
   *  - Create a variable call rta:number[] to save the self diving number
   * - Loop the number form left to start
   * - if the number is lower than 9 add it to rta
   * - if the number % 10 is zero skip it
   * - create a selfDiving function that receive a number and return a boolean
   *   - if it is true, add the number to rta
   *
   */
  const rta: number[] = [];

  for (let i = left; i <= right; i++) {
    if (i <= 9) {
      rta.push(i);
      continue;
    }
    if (i % 10 === 0) continue;
    if (isSelfDiving2(i)) rta.push(i);
  }

  return rta;
}

const loopEverySingleDigitInNumber = (num: number) => {
  let numCopy = num;

  while (numCopy) {
    let item = numCopy % 10;
    if (num % item !== 0) {
      return false;
    }

    numCopy = Math.floor(numCopy / 10);
  }
};
