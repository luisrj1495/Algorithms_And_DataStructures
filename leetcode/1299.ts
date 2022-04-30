function replaceElements(arr: number[]): number[] {
  if (arr.length === 1) return [-1];
  let max = arr[1];

  for (let i = 0; i < arr.length - 1; i++) {
    if (max < arr[i]) {
      max = Math.max(...arr.slice(i + 1));
    }

    arr[i] = max;
  }

  arr[arr.length - 1] = -1;

  return arr;
}

/**
 * Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.


 */

function replaceElements2(arr: number[]): number[] {
  let max = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let tmp = arr[i];
    arr[i] = max;

    max = Math.max(max, tmp);
  }

  return arr;
}

/**
 * maxPointer = 1;
 * maxValue = 18
 * [17,18,5,4,6,1]
 *
 * if (18 > 17) 17 = 18
 * 18 > 18 = maxValue = -Infinity maxValuePointer = 2
 *
 */
