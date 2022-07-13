const getWord = (s: string) => {
  let wordMap = {};

  for (let w of s) wordMap[w] = (wordMap[w] || 0) + 1;

  return Object.keys(wordMap)
    .sort((a, b) => wordMap[b] - wordMap[a])
    .reduce<string[]>((acc, letter) => {
      const frequency = wordMap[letter];

      acc.push(...Array.from({ length: frequency }, () => letter));

      return acc;
    }, []);
};

function minimumKeypresses(s: string): number {
  const word = getWord(s);
  const wordPress = {};
  let counter = 0;

  for (let l of word) {
    if (wordPress[l]) continue;
    wordPress[l] = Math.floor(counter / 9) + 1;
    counter++;
  }

  let count = 0;

  console.log(word);

  for (let w of s) {
    count += wordPress[w];
  }

  return count;
}


function minimumKeypresses2(s: string): number {
 const strMap = new Map<string, number>()
 const sLen = s.length
 for (let i: number = 0; i < sLen; i += 1) {
   const str = s[i]
   strMap.set(str, (strMap.get(str) || 0) + 1)
 }
 const sortedArr = [...strMap].sort((a, b) => b[1] - a[1])

 return sortedArr.reduce((acc, cur, index) => {
   const multi = index < 9 ? 1 : index < 18 ? 2 : 3
   return acc + cur[1] * multi
 }, 0)
}