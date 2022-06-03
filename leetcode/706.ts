class MyHashMap {
  data: Record<number, number> = {};
  constructor() {}

  put(key: number, value: number): void {
    this.data[key] = value;
  }

  get(key: number): number {
    return this.data[key] === undefined ? -1 : this.data[key];
  }

  remove(key: number): void {
    delete this.data[key];
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
