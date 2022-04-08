/**
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 *
 * TIME: O(n)
 *
 */

/**
 *
 * @param {number} num1
 * @param {number} num2
 */
const sameFrequency = (num1, num2) => {
  /**
   * - We need to create an object called num1Map and num2Map
   * - Make the numbers strings and save it in num1String num2String
   * - If the lengths between num1String and num2String are different, then return false
   * - Loop num1String and save the frequency in num1Map
   * - Loop num2String and save the frequency in num2Map
   * - Loop num2String and check if the key and value are in num1Map
   *   - If it does not exist return false
   * - Return true
   *
   */

  const num1Map = {};
  const num2Map = {};
  const num1String = String(num1);
  const num2String = String(num2);

  if (num1String.length !== num2String.length) return false;

  for (let n of num1String) {
    num1Map[n] = (num1Map[n] || 0) + 1;
  }

  for (let n of num2String) {
    num2Map[n] = (num2String[n] || 0) + 1;
  }

  for (let n of num2String) {
    if (num1Map[n] !== num2Map[n]) return false;
  }

  /**
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */

  return true;
};

/**
 *
 * @param {number} num1
 * @param {number} num2
 */
const sameFrequency2 = (num1, num2) => {
  /**
   * - We need to create an object called num1Map
   * - Make the numbers strings and save it in num1String num2String
   * - If the lengths between num1String and num2String are different, then return false
   * - Loop num1String and save the frequency in num1Map
   * - Loop num2String and check if the key and value are in num1Map
   *   - If it exist, subtract the value with 1
   *     - If the value after subtract is zero, delete the property
   *   - if it is not, return false
   * - Return if the size of num1Map is zero, then return true otherwise return false
   *
   */

  const num1Map = new Map();
  const num1String = String(num1);
  const num2String = String(num2);

  if (num1String.length !== num2String.length) return false;

  for (let n of num1String) {
    const value = (num1Map.get(n) || 0) + 1;
    num1Map.set(n, value);
  }

  for (let n of num2String) {
    if (!num1Map.get(n)) return false;

    const value = num1Map.get(n) - 1;
    if (!value) num1Map.delete(n);
    else num1Map.set(n, value);
  }

  /**
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   * 
   * This one use less memory than the above
   */

  return num1Map.size === 0;
};
