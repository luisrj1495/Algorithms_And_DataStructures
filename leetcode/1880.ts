const wordToNumber = (word: string) => {
  const num: number[] = [];

  for (let letter of word) {
    num.push(letter.charCodeAt(0) - 97);
  }

  return +num.join("");
};

function isSumEqual(
  firstWord: string,
  secondWord: string,
  targetWord: string
): boolean {
  /**
   * Create a function to convert the words to numbers
   *  - getWordToNumber
   *     - Loop the string
   *     - get the charCodeAt from each string and subtract 97
   *     - concat that number
   *     - return the string as a number
   * - convert firstWord to a number and sum with the convert of secondWord to a number
   * - compare the sum with the number of targetWord
   */

  return (
    wordToNumber(firstWord) + wordToNumber(secondWord) ===
    wordToNumber(targetWord)
  );
}
