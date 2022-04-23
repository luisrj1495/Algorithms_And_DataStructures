const capitalize = (word) => word.charAt(0).toUpperCase() + word.substring(1);

/**
 *
 * @param {string[]} words
 */
const capitalizeFirst = (words) => {
  const caps = [];
  if (!words.length) return caps;
  caps.push(capitalize(words[0]));

  return caps.concat(capitalizeFirst(words.slice(1)));
};

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
               ["Car"].capitalizeFirst(['taco','banana']);
                       ["Taco"].capitalizeFirst(['banana']);
                               ["Banana"].capitalizeFirst([]);
                               []
