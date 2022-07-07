const getMap = (nums: number[]) => {
  const numsMap = new Map();

  for (let n of nums) {
    const val = numsMap.get(n) || 0;
    numsMap.set(n, val + 1);
  }

  return numsMap;
};

function canBeEqual(target: number[], arr: number[]): boolean {
  const targetMap = getMap(target);
  const arrMap = getMap(arr);

  if (target.length !== arr.length) return false;

  for (let [key, val] of targetMap) {
    if (arrMap.get(key) !== val) return false;
  }

  return true;
}
