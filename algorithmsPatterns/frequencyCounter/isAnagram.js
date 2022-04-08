function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!

  /**
   * create an object to save the frequency for the str1
   * create an object to save the frequency for the str2
   * Loop str1
   * compare than the key and the frequency in the str2
   *  - If not, return false
   * return true
   */

  const str1Map = {};
  const str2Map = {};

  if (str1.length !== str2.length) return false;

  for (let w of str1) {
    str1Map[w] = (str1Map[w] || 0) + 1;
  }

  for (let w of str2) {
    str2Map[w] = (str2Map[w] || 0) + 1;
  }

  for (let w of str1) {
    if (str2Map[w] !== str1Map[w] || !(w in str2Map)) return false;
  }

  return true;
}

const validAnagram2 = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const str1Map = {};

  for (let w of str1) {
    str1Map[w] = (str1Map[w] || 0) + 1;
  }

  for (let w of str2) {
    if (!str1Map[w]) {
      return false;
    } else {
      str1Map[w] -= 1;
    }
  }

  return true;
};
