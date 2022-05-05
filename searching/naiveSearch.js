const naiveSearch = (longString, matchString) => {
  let count = 0;
  for (let longIndex = 0; longIndex < longString.length; longIndex++) {
    for (let matchIndex = 0; matchIndex < matchString.length; matchIndex++) {
      if (longString[longIndex + matchIndex] !== matchString[matchIndex]) {
        matchIndex = matchString.length + 1;
        break;
      }
      if (matchIndex === matchString.length - 1) {
        count++;
      }
    }
  }

  return count;
};

const naiveSearch2 = (long, short) => {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break;
      if (j === short.length - 1) count++;
    }
  }

  return count;
};

naiveSearch2("lorie loled", "lol");
