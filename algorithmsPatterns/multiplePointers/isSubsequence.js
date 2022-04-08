/**
 *  Write a function called which takes in two strings and checks whether the characters in the
 *  first string form a subsequence of the characters in the second string.
 *  In other words, the function should check whether the characters in
 * the first string appear somewhere in the second string,
 */

/**
 *
 * @param {string} sub
 * @param {string} sentence
 */

const isSubsequence = (sub, sentence) => {
  /**
   * "hello" "hello world"
   *
   */

  /**
   * create a variable named limit that is equal sentence length less 1
   * create a pointer called subIndex and starts in zero
   * Loop the sentence
   *  - Compare the character from the index subIndex with the value with the current i
   *  - if they are equal
   *    - plus +1 to subindex zero
   *    - if subIndex is greater or equal to limit return true
   * return false
   */
  const limit = sub.length - 1;
  let subIndex = 0;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == sub[subIndex]) {
      subIndex++;
      if (subIndex >= limit) return true;
    }
  }

  return false;
};

const isSubsequenceRecursive = (sub, sentence) => {
  if (!sub.length) return true;
  if (!sentence.length) return false;
  if (sub[0] === sentence[0])
    return isSubsequence(sub.slice(1), sentence.slice(1));
  return isSubsequence(sub, sentence.slice(1));
};

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false
