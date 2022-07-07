class NumArray {
  nums: number[];
  constructor(nums: number[]) {
    this.nums = nums;
  }

  sumRange(left: number, right: number): number {
    let start = Math.max(left, 0);
    let end = Math.min(right, this.nums.length - 1);
    let sum = 0;

    for (let i = start; i <= end; i++) sum += this.nums[i];

    return sum;
  }
}

class NumArray2 {
  prefix = [0];
  constructor(nums: number[]) {
    for (let i = 1; i <= nums.length; i++) {
      this.prefix[i] = this.prefix[i - 1] + nums[i - 1];
    }
  }

  sumRange(left: number, right: number): number {
    return this.prefix[right + 1] - this.prefix[left];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
