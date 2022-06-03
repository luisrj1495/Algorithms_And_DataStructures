class OrderedStream {
  data: string[];
  pointer: number;
  constructor(n: number) {
    this.data = Array.from({ length: n }, () => undefined);
    this.pointer = 0;
  }

  private getNextChucks(): string[] {
    if (this.data[this.pointer] === undefined) return [];
    const chucks: string[] = [];
    let index = this.pointer;

    for (index; index < this.data.length; index++) {
      const value = this.data[index];
      if (value === undefined) break;
      chucks.push(value);
    }

    this.pointer = index;

    return chucks;
  }

  insert(idKey: number, value: string): string[] {
    this.data[idKey - 1] = value;

    return this.getNextChucks();
  }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
