const factorial = (num) => {
 if (num <= 1) return 1;

 const newNum = num - 1

 const v = factorial(newNum);

 return num * v;
};

const factorial2 = (num) => {
  if (num <= 0) return 1;

  return num * factorial(--num);
};
