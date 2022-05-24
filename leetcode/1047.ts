const removeDuplicates = (s: string): string => {
  let words = [s[0]];

  for (let i = 1; i <= s.length; i++) {
    if (words[words.length - 1] === s[i]) {
      words.pop()
    } else {
      words.push(s[i]);
    }
  }

  return words.join("");
};

/**
 *  "abbaca"
 * [a]
 * a == b
 * [a,b]
 * b == b
 * [a]
 * a ==
 */
