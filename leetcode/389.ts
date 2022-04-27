function findTheDifference(s: string, t: string): string {
  /**
   * create a variable sMap
   * Loop the s param and save the frequency in sMap
   * Loop t
   *  - if the letter is in sMap subtract 1
   *  -
   */

  const tMap = {};

  for (let letter of t) {
    tMap[letter] = (tMap[letter] || 0) + 1;
  }

  for (let letter of s) {
    tMap[letter] -= 1;
    if (!tMap[letter]) delete tMap[letter];
  }

  return Object.keys(tMap)[0];
}

function findTheDifference2(s: string, t: string): string {
  let sSum = 0;
  let tSum = 0;
  for (let i = 0; i < s.length; i++) {
    sSum += s.charCodeAt(i);
    tSum += t.charCodeAt(i);
  }
  if (t.length > 0) {
    tSum += t.charCodeAt(t.length - 1);
  }
  return String.fromCharCode(tSum - sSum);
}
