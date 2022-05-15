const flatten = (arr) => {
  let newArr = [];
  for (let value of arr) {
    if (Array.isArray(value)) {
      newArr = newArr.concat(flatten(value));
    } else {
      newArr.push(value);
    }
  }

  return newArr;
};

console.log(flatten([1, [2, [3, 4], [[5]]]]));
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
