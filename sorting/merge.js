const mergeSortedArrays = (arr1, arr2) => {
  const sorted = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sorted.push(arr1[i]);
      i++;
    } else {
      sorted.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    sorted.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    sorted.push(arr2[j]);
    j++;
  }

  return sorted;
};

const mergerSort = (arr) => {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const arr1 = mergerSort(arr.slice(0, middle));
  const arr2 = mergerSort(arr.slice(middle));

  return mergeSortedArrays(arr1, arr2);
};

console.log(mergerSort([10, 5, 6, 3, 1]));
