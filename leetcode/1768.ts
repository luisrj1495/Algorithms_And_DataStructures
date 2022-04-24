function mergeAlternately(word1: string, word2: string): string {
  /**
   * - Create a newWord equal to ""
   * - Create a pointer  equal to zero
   * - create a variable call max that container the max length
   * - while (max has value)
   * - add in newWord word1[a] and word2[b] if the value is not undefined
   * - add 1 to pointer
   * - return newWord
   */

  let newWord = "";
  let pointer = 0;
  let maxLength = Math.max(word1.length, word2.length) - 1;

  while (pointer < maxLength) {
    if (word1[pointer]) newWord += word1[pointer];
    if (word2[pointer]) newWord += word2[pointer];

    pointer++;
  }

  return newWord;
}
