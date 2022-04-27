function commonChars(words: string[]): string[] {
  /**
   * take the first word and check its letters in the others words
   * create an array of objects saving the fequency by each word
   */

  const parsed = [];
  const target = words[0];
  const rta = [];

  if (words.length === 1) return target.split("");

  for (let word of words) {
    const mapWord = {};
    for (let letter of word) {
      mapWord[letter] = (mapWord[letter] || 0) + 1;
    }

    parsed.push(mapWord);
  }

  for (let letter of target) {
    let isInAll = true;
    for (let i = 1; i < parsed.length; i++) {
      if (parsed[i][letter]) {
        parsed[i][letter] = parsed[i][letter] - 1;
      } else {
        isInAll = false;
      }
    }

    if (isInAll) rta.push(letter);
  }

  return rta;
}

function commonChars2(words: string[]): string[] {
 let common: string[] = [];
 let [first] = words;

 first.split('').forEach(char => {
     if (words.every(word => word.includes(char))) {
         common.push(char);
         words = words.map(word => word.replace(char, ''));
     }
 })
 return common;
};
