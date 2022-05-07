function smallestCommonElement(mat: number[][]): number {
  const values = {};

  for (let row of mat) {
    for (let n of row) {
      values[n] = (values[n] || 0) + 1;
    }
  }

  for (let n in values) {
    if (values[n] !== mat.length) delete values[n];
  }

  const smallest = Object.keys(values);

  return smallest.length ? +smallest[0] : -1;
}
