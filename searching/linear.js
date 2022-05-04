/**
 * Time complexity: O(n)
 * Space Complexity: O(1)
 */

function linearSearch(data, target) {
  // add whatever parameters you deem necessary - good luck!
  for (let index = 0; index < data.length; index++) {
    if (data[index] === target) return index;
  }

  return -1;
}

const linearSearchRecursive = (data, target, index = 0) => {
  if (index > data.length) return -1;

  if (target === data[index]) return index;

  index++;

  return linearSearchRecursive(data, target, index);
};

const linearSearchRecursiveHelper = (data, target) => {
  const helper = (index) => {
    if (index > data.length) return -1;
    if (data[index] === target) return index;
    index++
    return helper(index)
  };

  return helper(0)
};
