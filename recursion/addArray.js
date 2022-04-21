const addArray = (num) => {
  if (num <= 0) return [];

  num--;

  const arr = addArray(num);

  arr.push(num);

  return arr;
};
