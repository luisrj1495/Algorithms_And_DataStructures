function maximum69Number(num: number): number {
  /**
   * Sol 1:
   * - check if the number is 9999 return 9999
   * - create a variable called max = num
   * - loop the number
   * - if the n is 6 change sum 1000 or 100 or 100
   */

  const nString = num.toString();
  let factor = Math.pow(10, nString.length - 1);

  for (let n of nString) {
    if (n === "6") {
      const substract = 3 * factor;
      return num + substract;
    }
    factor = factor / 10;
  }

  return num;
}

/**
 *
 */
