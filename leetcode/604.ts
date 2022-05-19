/**
 * - Decompress the string;
 *   - Loop the string
 *   - If it is a number, repeat the letter before the number and concat to the string
 * - create a iterator call index that start on zero
 */

class StringIterator {
  original: Record<number, { word: string; amount: number }> = {};
  index: number = 0;

  constructor(compressedString: string) {
    this.decompress(compressedString);
    console.log(this.original);
  }

  private isNumber(n: string) {
    if (!n) return false;
    return n.charCodeAt(0) >= 48 && n.charCodeAt(0) <= 57;
  }

  private decompress(compressedString: string) {
    let indexWord = 0;
    let index = 0;

    const getNumber = () => {
      let n = "";
      while (this.isNumber(compressedString[index])) {
        n += compressedString[index];
        index++;
      }

      return Number(n);
    };

    while (index < compressedString.length - 1) {
      const word = compressedString[index];
      index++;
      const amount = getNumber();
      this.original[indexWord] = {
        word,
        amount,
      };
      indexWord++;
    }
  }

  next(): string {
    const nextValue = this.original[this.index];

    if (!nextValue) return " ";

    nextValue.amount--;

    if (nextValue.amount <= 0) this.index++;

    return nextValue.word;
  }

  hasNext(): boolean {
    return Boolean(this.original[this.index]);
  }
}

/**
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
