const getSpaces = (text: string) => {
  return text.split("").reduce((acc, value) => {
    if (value === " ") acc += 1;

    return acc;
  }, 0);
};

const getWords = (text: string) => text.split(" ").filter(Boolean);

const createSpaces = (spaces: number) => " ".repeat(spaces);

const calculateStep = (spaces: number, wordsLength: number) => {
  return Math.floor(spaces / wordsLength);
};

function reorderSpaces(text: string): string {
  /**
   * - add the words in an array call words
   * - count the amount of spaces in a variable called spaces
   * - create a variable call step where Math.ceil(spaces/word)
   * - create a function to generate spaces
   * - create function to recalculate the spaces subtracting the step in spaces
   * - create an array to save the rearrange word call rearrange
   * - Loop the words
   *    - Add to rearrange
   *    - Add the spaces to rearrange
   * - Return rearrange as string
   *
   */

  const rearrange: string[] = [];
  const words = getWords(text);
  let spaces = getSpaces(text);
  const step = calculateStep(spaces, words.length - 1);

  const getSpacesToAdd = () => {
    const diff = spaces - step;
    const currentSpaces = spaces;

    if (spaces <= 0) return 0;

    spaces -= step;

    if (diff < 0) return currentSpaces;

    return step;
  };

  console.log({ words: words.length, spaces, step });

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const isLastWord = i === words.length - 1;
    rearrange.push(word);
    if (!isLastWord) {
      const spaceToAdd = getSpacesToAdd();
      rearrange.push(createSpaces(spaceToAdd));
    }
    console.log({ spaces, word, isLastWord });
  }

  if (spaces > 0) rearrange.push(createSpaces(spaces));

  return rearrange.join("");
}

/**
 * Inputs:
 * " practice   makes   perfect a a a a a a a a a a a a a a a a a"
"  this   is  a sentence "
 */
