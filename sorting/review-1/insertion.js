const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let valueToSort = arr[i];
    let j = i - 1;
    console.log({ valueToSort, j });
    for (j; j >= 0; j--) {
      if (valueToSort < arr[j]) {
        arr[j + 1] = arr[j];
      } else break;
    }
    arr[j + 1] = valueToSort;
    console.log("Moved", arr);
  }

  return arr;
};

const insertionSort2 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let valueToSort = arr[i];
    let j = i - 1;
    console.log({ valueToSort, j, arr });
    for (j; j >= 0 && valueToSort < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = valueToSort;
    console.log("Moved", arr);
  }

  return arr;
};

// console.log(insertionSort([5, 4, 3, 2, 1, 0]));
console.log(insertionSort2([5, 4, 3, 2, 1, 0]));

/**
 * Time Complexity: O(n^2)
 * Best Time complexity: O(n)
 * - Use case: When we are receiving data that we we need to sort
 * - Space Complexity: O(1)
 */
