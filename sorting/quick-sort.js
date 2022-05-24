const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const getPivotIndex = (arr, start = 0, end = arr.length - 1) => {
  console.log(start, end);
  const pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, swapIndex, start);

  console.log(arr);

  return swapIndex;
};

// console.log(getPivotIndex([20, 5, 1, 2, 25, 1, 3, 5]));
// console.log(getPivotIndex([5, 2, 1, 8, 4, 7, 6, 3]));
// console.log(getPivotIndex([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivotIndex = getPivotIndex(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));

/**
 * Space Complexity: O(1)
 * Time Complexity: O(n log n)
 */
