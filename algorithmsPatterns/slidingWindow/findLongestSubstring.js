/**
 * Write a function called findLongestSubstring, which accepts a string and returns
 * the length of the longest substring with all distinct characters.
 */

const findLongestSubstring = (str) => {
  let longest = -Infinity;
  const letters = new Set();

  console.log(str)

  for (let letter of str) {
    if (letters.has(letter)) {
      longest = Math.max(letters.size, longest);
      letters.clear();
    } else {
      letters.add(letter);
    }
  }


  return longest == -Infinity ? 0 : longest;
};

console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6







/**
 * r
 *
 */
