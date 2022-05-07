function intersection(nums: number[][]): number[] {
  const values = {};
  const rta = [];

  for (let row of nums) {
    for (let n of row) {
      values[n] = (values[n] || 0) + 1;
    }
  }

  for (let n in values) {
    if (values[n] == nums.length) rta.push(+n);
  }

  return rta;
}
