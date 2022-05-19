const mergeSortedArrays = (arr1, arr2) => {
  const sorted = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length || index2 < arr1.length) {
    console.log({ index1, index2, v1: arr1[index1], v2: arr2[index2] });
    const val1 = arr1[index1];
    const val2 = arr2[index2];

    if (val1 === undefined && val2 !== undefined) {
      sorted.push(val2);
      index2++;
      continue;
    }

    if (val2 === undefined && val1 !== undefined) {
      sorted.push(val1);
      index1++;
      continue;
    }

    if (val1 === val2) {
      sorted.push(val1, val2);
      index1++;
      index2++;
      continue;
    }

    if (val1 < val2) {
      sorted.push(val1);
      index1++;
    } else {
      sorted.push(val2);
      index2++;
    }
  }
  return sorted;
};

const mergeSortedArrays2 = (arr1, arr2) => {
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

const mergeSortedArrays3 = (arr1, arr2) => {
  const sorted = [];
  let i = 0;
  let j = 0;

  for (let index = 0; index < arr1.length + arr2.length; index++) {
    if (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        sorted.push(arr1[i]);
        i++;
      } else {
        sorted.push(arr2[j]);
        j++;
      }
      continue;
    }
    if (i < arr1.length) {
      sorted.push(arr1[i]);
      i++;
    }

    if (j < arr2.length) {
      sorted.push(arr2[j]);
      j++;
    }
  }

  return sorted;
};

console.log(mergeSortedArrays3([1, 10, 50], []));
