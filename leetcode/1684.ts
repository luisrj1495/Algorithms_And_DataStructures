/**
 * You are given a string allowed consisting of distinct characters and an array of strings words.
 *  A string is consistent if all characters in the string appear in the string allowed.
 * Return the number of consistent strings in the array words.
 */

function countConsistentStrings(allowed: string, words: string[]): number {
  /**
   * create a set called allowedMap
   * create a counter
   * Loop words
   * Take the word and split it
   * create a filter and check if the current word does not exist in allowedMap
   * if the length is zero, count it
   */

  const allowedMap = new Set(allowed);
  let count = 0;

  for (let word of words) {
    const diff = word.split("").filter((w) => !allowedMap.has(w));
    if (diff.length === 0) count++;
  }

  return count;
}
