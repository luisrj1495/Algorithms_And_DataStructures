function isThree(n: number): boolean {
  let count = 0;

  const helper = (divisor: number) => {
    if (n % divisor === 0) count++;
    divisor--;
    if (divisor >= 1) helper(divisor);
  };

  helper(n) 

  return count === 3
}
