function frequencySort(s: string): string {
  const wordMap = {};

  for (let l of s) wordMap[l] = (wordMap[l] || 0) + 1;

  return Object.keys(wordMap)
    .sort((a, b) => wordMap[b] - wordMap[a])
    .reduce<string[]>((acc, letter) => {
      acc.push(...Array.from({ length: wordMap[letter] }, () => letter));
      return acc;
    }, [])
    .join("");
}
