function isPowerOfTwo(target: number): boolean {
  /**
   * - if it is 1 return true
   * -if it is return false
   * - create helper to recurse
   * - past to the helpert the number
   * - base case
   *   - if the n == target return true;
   *   -if n > target return false
   *  call helper
   * return what helper return
   */

  if (target < 0) return false;
  if (target === 1) return true;

  const helper = (pow: number) => {
    if (pow === target) return true;
    if (pow > target) return false;

    return helper(pow * pow);
  };

  return helper(2);
}

/**
 * Log4x = 16
 */

function isPowerOfThree(n: number): boolean {
  let [, decimal] = (Math.log(n) / Math.log(3)).toFixed(6).split(".");

  const num = +decimal;

  return num === 0;
}
