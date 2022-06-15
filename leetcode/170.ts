class TwoSum {
  data: Record<number, number>;
  constructor() {
    this.data = {};
  }

  add(n: number): void {
    this.data[n] = (this.data[n] || 0) + 1;
  }

  find(value: number): boolean {
    for (let n in this.data) {
      const num = +n;
      const diff = value - num;
      let frequency = this.data[diff];
      frequency--;

      if (this.data[diff]) {
        if (diff !== num) return true;
        if (frequency > 0) return true;
      }
    }
    return false;
  }
}
