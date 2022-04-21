function arrayRankTransform(arr: number[]): number[] {
  /**
   * copy the current arr to a set to remove duplicates
   * copy the set an array and sort it
   * loop the sorted array and save it in a map
   *  - The key will be the num and the value the index
   * Loop the original array
   *  - Find the num in the map and add the index + 1 to an array called indices
   * return indices
   */

  const sorted = [...new Set(arr)].sort((a, b) => a - b);
  const arrMap = new Map();
  const indices = [];

  sorted.forEach((num, index) => {
    arrMap.set(num, index);
  });

  for (let n of arr) {
    indices.push(arrMap.get(n) + 1);
  }

  return indices;
}

function arrayRankTransform2(arr: number[]): number[] {
  const dic = arr.slice().sort((a, b) => a - b);
  let rank = 1;
  const ranks = new Map();
  dic.forEach((val) => {
    if (!ranks.get(val)) ranks.set(val, rank++);
  });
  return arr.map((val) => ranks.get(val));
}
