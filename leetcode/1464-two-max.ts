const getMaxAndIndex = (params: {
  nums: number[];
  skipIndex: number | null;
}) => {
  let max = -Infinity;
  let index = -1;

  for (let i = 0; i < params.nums.length; i++) {
    if (params.skipIndex === i) continue;
    console.log({ i, skip: params.skipIndex });
    if (params.nums[i] > max) {
      max = params.nums[i];
      index = i;
    }
  }

  return { max, index };
};

function maxProduct(nums: number[]): number {
  const firstMax = getMaxAndIndex({ nums, skipIndex: null });
  const secondMax = getMaxAndIndex({ nums, skipIndex: firstMax.index });
  console.log({ firstMax, secondMax });

  return (firstMax.max - 1) * (secondMax.max - 1);
}

function maxProduct2(nums: number[]): number {
 let i = nums[0];
 let j = nums[1];
 for (let k = 2; k < nums.length; k++) {
   if (i > j) {
     j = Math.max(j, nums[k]);
   } else {
     i = Math.max(i, nums[k]);
   }
 }
 return (i - 1) * (j - 1);
};
