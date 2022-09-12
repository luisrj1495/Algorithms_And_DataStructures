const letterToValidScaleWidth = (letter: string) => letter.charCodeAt(0) - 97;

function numberOfLines(widths: number[], s: string): number[] {
  /**
   * - create a function that takes a letter and return in a scale of 0 - 29
   * - create a variable call pixels to save the pixels from widths
   * - Loop the s
   *     -  Use the function to transform the letter into a valid index
   *     -  Take the index a use it in widths
   *     - Sum the value from widths into pixels
   * - Divide pixels into 100
   *    - Take the integer and the decimal part
   * return the array with the values
   */

  let pixels = 0;
  let lines = 0;

  for (let letter of s) {
    const widthIndex = letterToValidScaleWidth(letter);
    const width = widths[widthIndex];
    pixels += widths[widthIndex];

    if (pixels > 100) {
      lines++;
      pixels = width
    }
  }

  if (pixels) lines++;

  return [lines, pixels];
}
