function divideString(s: string, k: number, fill: string): string[] {
  let pointer = 0;
  const rta = [];

  while (pointer < s.length) {
    let newString = s.substr(0, k);
    if (!newString.length) break;
    if (newString.length < k) {
      newString += fill.repeat(newString.length - k);
    }
    rta.push(newString);
    console.log({ newString, pointer });
    pointer += k;
  }

  return rta
}
