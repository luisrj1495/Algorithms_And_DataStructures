const insertion = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};
/**
 * O(n^2)
 * if data is almost sorted O(n)
 * 
 */

console.log(insertion([2, 1, 9, 76, 3, 0]));
