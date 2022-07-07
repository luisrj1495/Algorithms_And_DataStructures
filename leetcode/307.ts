class NumArray {
  nums: number[];
  sumValues: number[];
  constructor(nums: number[]) {
    this.nums = nums;
    this.sumValues = [0];
    this.calculateSum(1);
    console.log(this.sumValues);
  }

  private calculateSum(start: number) {
    const min = Math.max(1, start);
    for (let i = min; i <= this.nums.length; i++) {
      this.sumValues[i] = this.sumValues[i - 1] + this.nums[i - 1];
    }
  }

  update(index: number, val: number): void {
    this.nums[index] = val;
    this.calculateSum(index);
  }

  sumRange(left: number, right: number): number {
    return this.sumValues[right + 1] - this.sumValues[left];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

/**
 * [1,2,3,4,5,6]
 * [0,1,3,6,10,15,21]
 * left = 1 right = 4
 * 2 - 5 = 14
 * 15 - 1 = 14
 * [1,2,3,10,5,6]
 * [0,1,3,6,10,15,21]
 *
 *
 */
