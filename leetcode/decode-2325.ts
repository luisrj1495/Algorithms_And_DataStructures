const createDictionary = (key: string) => {
  const keySet = new Set();
  const keyMap: Record<string, string> = {};
  let currentWord = 97;

  for (let k of key) {
    if (keySet.has(k) || k === " ") continue;
    keyMap[k] = String.fromCharCode(currentWord);
    currentWord++;
    keySet.add(k);
  }

  return keyMap;
};

function decodeMessage(key: string, message: string): string {
  const dictionary = createDictionary(key);
  const decoded: string[] = [];

  /**
   * Concat words is worst that create an string array and then join it
   */
  for (let m of message) {
    decoded.push(dictionary[m] || " ");
  }

  return decoded.join("");
}
