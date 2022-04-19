const lengthOfLongestSubstring = (str: string) => {
  let longestLength = -Infinity;
  let total = "";
  let index = 0;

  while (index < str.length) {
    const letter = str[index];
    if (!total.includes(letter)) {
      total += letter;
      longestLength = Math.max(total.length, longestLength);
      index++;
    } else {
      total = total.substring(1);
    }
    console.log({ total });
  }

  console.log({ longestLength, total });

  return longestLength === -Infinity ? 0 : longestLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3 -> abc

/**
 * a
 */
