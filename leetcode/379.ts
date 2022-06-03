class PhoneDirectory {
  directory: number[];
  constructor(maxNumbers: number) {
    this.directory = Array.from({ length: maxNumbers }, () => undefined);
  }

  get(): number {
    for (let i = 0; i < this.directory.length; i++) {
      if (this.directory[i] === undefined) {
        this.directory[i] = i;
        return i;
      }
    }

    return -1;
  }

  check(number: number): boolean {
    return this.directory[number] === undefined;
  }

  release(number: number): void {
    this.directory[number] = undefined;
  }
}

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */
