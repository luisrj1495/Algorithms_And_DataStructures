const arrOdds = (arr) => {
  if (!arr.length) return true;
  const value = arr[0];

  return value % 2 !== 0 && arrOdds(arr.slice(1));
};

console.log(arrOdds([3, 3, 3, 3, 3, 3, 3, 3, 2]));
