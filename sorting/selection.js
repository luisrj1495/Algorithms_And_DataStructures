const swap = (arr, to, from) => {
  const tmp = arr[to];
  arr[to] = arr[from];
  arr[from] = tmp;
};

/**
 * We loop through the array, and for each element, we loop through the rest of the array to find the
 * lowest value, and then swap the lowest value with the current element
 * @param arr - the array to be sorted
 * @returns The sorted array
 */
const selection = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowerIndexValue = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr, arr[j], arr[lowerIndexValue]);
      if (arr[j] < arr[lowerIndexValue]) {
        lowerIndexValue = j;
      }
    }
    console.log("Finish the loop");
    if (lowerIndexValue !== i) swap(arr, i, lowerIndexValue);
  }

  return arr;
};

/**
 * Time Complexity: O(n^2)
 */
