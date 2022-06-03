class FirstUnique1 {
  unique: Set<Number>;
  firstUnique: number[];
  constructor(nums: number[]) {
    this.firstUnique = [];
    this.unique = new Set();
    this.initilize(nums);
  }

  private initilize(nums: number[]) {
    for (let n of nums) {
      this.add(n);
    }
  }

  showFirstUnique(): number {
    return this.firstUnique[0] ?? -1;
  }

  add(value: number): void {
    if (this.unique.has(value)) {
      const findIndex = this.firstUnique.findIndex((v) => v === value);
      this.firstUnique.splice(findIndex, 1);
    } else {
      this.unique.add(value);
      this.firstUnique.push(value);
    }
  }
}

class FirstUnique {
  unique: Record<number, number>;
  queue: number[];
  lastUniqueIndex: number;
  constructor(nums: number[]) {
    this.queue = [];
    this.lastUniqueIndex = 0;
    this.unique = {};
    this.initilize(nums);
  }

  private initilize(nums: number[]) {
    for (let n of nums) {
      this.add(n);
    }
  }

  showFirstUnique(): number {
    while (this.lastUniqueIndex < this.queue.length) {
      const num = this.queue[this.lastUniqueIndex];
      if (this.unique[num] === 1) {
        return this.queue[this.lastUniqueIndex];
      }
      this.lastUniqueIndex++;
    }
    this.lastUniqueIndex = this.queue.length;
    return -1;
  }

  add(value: number): void {
    this.unique[value] = (this.unique[value] || 0) + 1;
    this.queue.push(value);
  }
}

const firstUnique = new FirstUnique([2, 3, 5]);
firstUnique.showFirstUnique(); // return 2
firstUnique.add(5); // the queue is now [2,3,5,5]
firstUnique.showFirstUnique(); // return 2
firstUnique.add(2); // the queue is now [2,3,5,5,2]
firstUnique.showFirstUnique(); // return 3
firstUnique.add(3); // the queue is now [2,3,5,5,2,3]
firstUnique.showFirstUnique(); // return -1

/**
 *
 * [2,3,5]  unique= {2,3,5}  firstUnique=[2,3,5]
 *
 *
 */

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
