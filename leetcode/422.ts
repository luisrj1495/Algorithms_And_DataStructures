const getColumValue = (params: { words: string[]; row: number }) => {
  let columWord = "";

  for (let word of params.words) {
    const w = word[params.row];

    if (w) columWord += w;
  }

  return columWord;
};

function validWordSquare(words: string[]): boolean {
  for (let row = 0; row < words.length; row++) {
    if (words[row] !== getColumValue({ words, row })) return false;
  }

  return true;
}
