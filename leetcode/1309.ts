const getAlphabetLetter = (num: string) => String.fromCharCode(+num + 96);

function freqAlphabets(s: string): string {
  /**
   * - Create a variable call parsed as string
   * - Loop the string s from right to left
   * - Check if the letter is #
   *    - If so,
   *      - We need to take two letters
   *      - We'll concat i-1 and i-2
   *      - We'll get the alphabet letter
   *      - Concat it to parsed
   *   - if Not:
   *      - We'll get the alphabet letter
   *      - Concat it to parsed
   *
   */

  let parsed = "";

  for (let i = s.length - 1; i >= 0; i--) {
    const letter = s[i];
    console.log(letter, i);

    if (letter === "#") {
      parsed = getAlphabetLetter(s[i - 2] + s[i - 1]) + parsed;
      i -= 2;
    } else {
      parsed = getAlphabetLetter(letter) + parsed;
    }
  }

  return parsed;
}
