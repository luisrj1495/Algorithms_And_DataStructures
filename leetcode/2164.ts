function sortEvenOdd(nums: number[]): number[] {
  const odds = [];
  const even = [];
  const rta = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) even.push(nums[i]);
    else odds.push(nums[i]);
  }

  odds.sort((a, b) => b - a);
  even.sort((a, b) => a - b);
  console.log({ odds, even });

  for (let i = 0; i < nums.length; i++) {
    if (even[i] !== undefined) rta.push(even[i]);
    if (odds[i] !== undefined) rta.push(odds[i]);
    if (even[i] == undefined && odds[i] !== undefined) break;
  }

  return rta;
}
