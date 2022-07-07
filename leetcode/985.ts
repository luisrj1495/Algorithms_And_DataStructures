function sumEvenAfterQueries(nums: number[], queries: number[][]): number[] {
  const rta: number[] = [];
  for (let [val, index] of queries) {
    nums[index] = nums[index] + val;
    rta.push(
      nums.reduce((acc, num) => {
        if (num % 2 === 0) acc += num;
        return acc;
      }, 0)
    );
  }

  return rta;
}

const isEven = (num: number) => num % 2 === 0;

function sumEvenAfterQueries2(nums: number[], queries: number[][]): number[] {
  const rta: number[] = [];
  let evens = nums.reduce((acc, num) => {
    if (isEven(num)) acc += num;
    return acc;
  }, 0);

  for (let [val, index] of queries) {
    const prev = nums[index];
    nums[index] = nums[index] + val;

    if (isEven(prev)) evens -= prev;
    if (isEven(nums[index])) evens += nums[index];

    rta.push(evens);
  }

  return rta;
}
