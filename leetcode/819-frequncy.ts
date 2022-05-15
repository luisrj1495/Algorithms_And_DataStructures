const getWords = (sentence: string) => {
  const words: string[] = [];
  const hasSeparator = new Set(",. ");
  const restrictions = new Set("!?',;..");

  let word = "";

  for (let letter of sentence) {
    if (hasSeparator.has(letter)) {
      word && words.push(word);
      word = "";
      continue;
    }
    if (!restrictions.has(letter)) {
      word += letter;
    }
  }

  if (word) words.push(word);

  return words;
};

function mostCommonWord(paragraph: string, banned: string[]): string {
  const bannedSet = new Set(banned.map((b) => b.toLowerCase()));
  const frequency = {};
  const words = getWords(paragraph.toLowerCase());
  console.log(words);

  for (let word of words) {
    if (bannedSet.has(word)) continue;
    frequency[word] = (frequency[word] || 0) + 1;
  }

  let max = -Infinity;
  let word = "";

  for (let key in frequency) {
    if (frequency[key] > max) {
      max = frequency[key];
      word = key;
    }
  }

  return word;
}

function mostCommonWord2(paragraph: string, banned: string[]): string {
  let obj = {};
  let bannedW = new Set(banned);
  let words = paragraph.toLowerCase().split(/\W+/);
  for (let w of words) {
    if (!bannedW.has(w)) {
      if (obj[w]) {
        obj[w] += 1;
      } else obj[w] = 1;
    }
  }

  let max = -Infinity;
  let resp = "";
  for (let res in obj) {
    if (obj[res] > max) {
      max = obj[res];
      resp = res;
    }
  }

  return resp;
}

console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]));
