/**
 * Write a function called minSubArrayLen which accepts two parameters - an array of positive
 * integers and a positive integer.
 * This function should return the minimal length of a contiguous
 *  subarray of which the sum is greater than or equal to the
 * integer passed to the function. If there isn't one, return 0 instead.
 */

const minSubArrayLen = (arr, target) => {
  /**
   * - Create two pointers i and j
   * - Create an accumulator in zero
   * - Create a len variable that will save the min len possible
   * - While i < j
   * - if accumulator is equal to target
   *    - newLen is j - i + 1
   *    - if newLen is lower than the current one, len will be equal to newLen
   *    - i will have the value of j
   *    - accumulator will be equal to arr[j]
   * - if accumulator is lower than the target
   *    - move j one position
   *    - sum arr[j] to the accumulator
   * - else
   *    - Subtract arr[i] to the accumulator
   *    - move i one position
   * - Return the len
   */

  const base = 100000000;
  let i = 0;
  let j = 0;
  let accumulator = 0;
  let len = base;

  while (i < arr.length) {
    if (accumulator < target && j < arr.length) {
      accumulator += arr[j];
      j++;
    } else if (accumulator >= target) {
      len = Math.min(len, j - i);
      accumulator -= arr[i];
      i++;
    } else {
      break;
    }
  }

  return len == base ? 0 : len;
};



console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 [4,3]
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 [5,4]
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); //1 -> 62 is gr
console.log(minSubArrayLen([1, 4, 16, 22, 6, 7, 8, 9, 10], 39)); // 3

/**
 * steps = 0;
 * 7 - 2 = 5  steps = 1
 * 5 == 0 false;
 * 5 -3 = 2  steps = 2
 * 2 - 1 = 1 steps= 3
 */

/**
 * 2 + 0 = 2
 * 2 == 7 false
 * 3 + 2 = 5 ; igual a 7: false
 * 5 + 1 = 6; igaul a 7 : false;
 * 6 + 2 = 8; igayl 7 : false;
 * 8 - 2 = 6
 * 6 + 4 = 10
 * 10 - 3 = 7
 */
