function largeGroupPositions(s: string): number[][] {
  const groups: number[][] = [];
  let start = 0;
  let end = 0;

  while (end < s.length) {
    if (s[start] !== s[end]) {
     const endEqualIndex = end - 1
      if (endEqualIndex - start >= 3) groups.push([start, endEqualIndex]);
      start = end;
    }

    end++;
  }

  return groups;
}

/**

"abcdddeeeeaabbbcd"
       s
          e

*/
