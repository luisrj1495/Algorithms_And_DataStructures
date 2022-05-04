/**
 * Time complexity: O(log n)
 * Space complexity: O(1)
 */

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    console.log({ middleValue: arr[middle] });

    if (arr[middle] === target) return middle;
    if (arr[middle] < target) left = middle + 1;
    else right = middle - 1;
  }

  return -1;
};

binarySearch([1, 2, 3, 4, 5, 6, 7], 3);
