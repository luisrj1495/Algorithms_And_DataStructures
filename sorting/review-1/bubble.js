/**
 * It swaps the values of two elements in an array
 * @param arr - the array we're sorting
 * @param to - the index of the element we want to move
 * @param from - the index of the item we're moving
 */
const swap = (arr, to, from) => {
  const tmp = arr[to];
  arr[to] = arr[from];
  arr[from] = tmp;
};

const bubbleSort1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let wasSwap = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > [j + 1]) {
        swap(arr, j, j + 1);
        wasSwap = true;
      }
    }
    if (!wasSwap) break;
    console.log("FINISED LOOP", arr);
  }

  return arr;
};

const bubbleSort2 = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    let wasSwap = false;

    for (let j = 0; j < i; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        wasSwap = true;
      }
    }
    if (!wasSwap) break;

    console.log("FINISED LOOP", arr);
  }

  return arr;
};

bubbleSort1([5, 4, 3, 2, 1]);
bubbleSort2([5, 4, 3, 2, 1]);
bubbleSort2([1, 2, 3, 4, 5]);

/**
 * Space Complexity: O(1)
 * Time Complexity: O(n^2)
 * Best case: O(n)
 */
