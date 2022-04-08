/**
 * checks whether there are any duplicates among the arguments passed in.
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 *
 * @param  {...any} args
 * @returns {boolean}
 */

const areThereDuplicates = (...args) => {
  /**
   * - create a map
   * - loop the args and save the value and its frequency
   * - Loop the args
   * - if frequency is greater than one
   *   - Return true
   * - Return false
   *
   */

  const frequency = {};

  for (let n of args) {
    frequency[n] = (frequency[n] || 0) + 1;
  }

  for (let n of args) {
    if (frequency[n] > 1) return true;
  }

  return false;

  /**
   * Time: O(n)
   * Space: O(n)
   */
};

const areThereDuplicates2 = (...args) => {
  /**
   * - Sort the args
   * - loop the args
   * - if the current value is equal to the before one
   *  - Then, return true
   * - Return false
   *
   */

  args.sort();

  for (let index = 1; index < args.length; index++) {
    if (args[index] == args[index - 1]) return true;
  }

  return false;

  /**
   * Time: O(n log n)
   * Space: O(1)
   */
};

const areThereDuplicates3 = (...args) => {
  return new Set(args).size !== args.length;
};

console.log(areThereDuplicates(1, 2, 4));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
