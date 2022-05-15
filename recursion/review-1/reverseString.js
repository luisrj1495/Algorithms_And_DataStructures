const reverseString = (str) => {
  if (!str.length) return "";

  return reverseString(str.slice(1)) + str.charAt(0);
};


console.log(reverseString("donchi"))
