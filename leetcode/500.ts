const getKeyboard = (word: string) => {
  word = word.toLowerCase();
  const keyboards = [
    new Set("qwertyuiop"),
    new Set("asdfghjkl"),
    new Set("zxcvbnm"),
  ];

  return keyboards.find((keyboard) => keyboard.has(word));
};

const hasAllMatches = (word: string, keyboard: Set<string>) => {
  for (let letter of word) {
    if (!keyboard.has(letter)) return false;
  }

  return true;
};

function findWords(words: string[]): string[] {
  /**
   * - Create the keyboard row
   * - Get the keyboard according to the first letter
   * - Loop the words and check if the word match with all the words in the keyboard
   *   - if so, add the word to result
   * - return result
   */
  const matches: string[] = [];

  for (let word of words) {
    const keyboard = getKeyboard(word.charAt(0));
    if (hasAllMatches(word.toLowerCase(), keyboard)) matches.push(word);
  }

  return matches;
}
