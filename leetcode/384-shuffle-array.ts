class Solution {
  original: number[];
  constructor(nums: number[]) {
    this.original = [...nums];
  }

  reset(): number[] {
    return this.original;
  }

  randomIndex(length: number): number {
    return Math.floor(Math.random() * length);
  }

  shuffle(): number[] {
    const shuffle: number[] = [];
    const copied = [...this.original];

    while (shuffle.length < this.original.length) {
      const index = this.randomIndex(copied.length);
      shuffle.push(copied[index]);
      copied.splice(index, 1);
    }

    return shuffle
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */


 class Solution2 {
  private nums;
  
  constructor(nums: number[]) {
      this.nums = nums;
  }

  reset(): number[] {
      return this.nums;
  }

  shuffle(): number[] {
      const nums = this.nums.slice()
      
      for (let i = 0, j = nums.length; i < j; i++) {
          const idx = Math.floor(Math.random() * j) as number
          [nums[idx], nums[i]] = [nums[i], nums[idx]]
      }
      return nums
  }
}


class Solution3 {
 nums: number[]
 init_state: number[]

 constructor(nums: number[]) {
     this.nums = nums
     this.init_state = [...nums]
 }

 reset(): number[] {
     return this.init_state
 }

 shuffle(): number[] {
     for(let i = 0; i < this.nums.length; i++) {
         const randomIndex = Math.ceil(Math.random() * (this.nums.length - 1))
         const temp = this.nums[randomIndex]
         this.nums[randomIndex] = this.nums[i] 
         this.nums[i] = temp
     }

     return this.nums
 }
}
