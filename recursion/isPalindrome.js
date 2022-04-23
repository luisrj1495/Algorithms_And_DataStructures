/**
 * 1. Need to reverse the string and then compare it
 */

const isPalindrome = (word) => {
  const reverse = (w) => {
    if (w.length === 1) return w;

    return reverse(w.slice(1)) + w[0];
  };

  return reverse(word) === word;
};

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

isPalindrome("awesome"); // false
isPalindrome("foobar"); // false
isPalindrome("tacocat"); // true
isPalindrome("amanaplanacanalpanama"); // true
isPalindrome("amanaplanacanalpandemonium"); // false
