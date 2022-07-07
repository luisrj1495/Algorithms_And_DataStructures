class SparseVector {
  nums: number[];
  constructor(nums: number[]) {
    this.nums = nums;
  }

  // Return the dotProduct of two sparse vectors
  dotProduct(vec: SparseVector): number {
    let rta = 0;
    for (let i = 0; i < this.nums.length; i++) {
      rta += this.nums[i] * vec.nums[i];
    }

    return rta;
  }
}

/**
 * Your SparseVector object will be instantiated and called as such:
 * var v1 = new SparseVector(nums1)
 * var v2 = new SparseVector(nums1)
 * var ans = v1.dotProduct(v2)
 */
