/**
 *
 * @param {string} word
 */
const reverse = (word) => {
  if (word.length === 1) return word;

  return (
    word.charAt(word.length - 1) + reverse(word.substring(0, word.length - 1))
  );
};

const reverse2 = (word) => {
  if (word.length == 1) return word;

  return reverse2(word.slice(1)) + word[0];
};
