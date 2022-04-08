/**
 *  Given a sorted array of integers and a target average,
 *  determine if there is a pair of values in the array where
 *  the average of the pair equals the target average.
 *  There may be more than one pair that matches the average target.
 *
 * @param {Array<number>} list
 * @param {number} targetAverage
 */

const averagePair = (list, targetAverage) => {
  /**
   * - create two pointer left and right
   * - left starts in zero
   * - right starts in list.length - 1
   * - While left is lower than right
   *  - Sum left and right value and divide in two
   *   - if average is equal to the target, return true
   *  - if the calculated average is lower than the target
   *   - then plus 1 to left
   *   - otherwise less 1 to right
   * return false
   */
  let left = 0;
  let right = list.length - 1;

  while (left < right) {
    const calculatedAverage = (list[left] + list[right]) / 2;

    if (calculatedAverage === targetAverage) return true;
    if (calculatedAverage < targetAverage) left++;
    else right--;
  }

  return false;
};

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
