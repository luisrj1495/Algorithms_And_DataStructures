const swap = (arr, to, from) => {
  const tmp = arr[to];
  arr[to] = arr[from];
  arr[from] = tmp;
};

const selection = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowerIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[j], arr[lowerIndex]);
      if (arr[j] < arr[lowerIndex]) lowerIndex = j;
    }
    console.log("Lower Element", { lowerIndex, value: arr[lowerIndex] });
    if (i !== lowerIndex) {
      swap(arr, i, lowerIndex);
    }
    console.log("Array", arr);
  }
};

selection([5, 4, 3, 2, 1, 0]);

/**
 * Space Complexity: O(1)
 * Time Complexity: O(n^2)
 * Best time complexity: O(n^2)
 */
