const swap = (arr, from, to) => {
  const tmp = arr[from];
  arr[from] = arr[to];
  arr[to] = tmp;
};

const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  return arr;
};

const bubbleSort2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let wasSwap = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        wasSwap = true;
      }
    }
    if (!wasSwap) break;
  }

  return arr;
};

/**
 * - Time complexity O(n^2)
 * - If data is nearly sorted is O(n)
 */

console.log(bubbleSort([6, 4, 15, 10]));
