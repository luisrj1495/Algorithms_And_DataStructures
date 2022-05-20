function makeFancyString(s: string): string {
  let currentWord = null;
  let count = 0;
  let word = "";

  for (let w of s) {
    if (w !== currentWord) {
      currentWord = w;
      count = 0;
    }

    if (currentWord === w) count++;

    if (count < 3) word += w;
  }

  return word;
}

/**
 * "leeetcode" currentWord=null  count=0
 *             currentWord=l  count=1
 * e
 */
