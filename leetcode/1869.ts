function checkZeroOnes(s: string): boolean {
  /**
 * - Create four variables:
 *  countZeros, countOnes, maxZeros, maxOnes
 * - Loop the string:
 *   - if the current is 1:
 *     - countOnes++
 *     - maxZeros = maxZeros , countZeros
 *     - countZeros = 0
 *  else
       - countZeros++
       - maxOnes = maxOnes, countOnes
       - maxOnes = 0
  - if maxOnes > maxZeros return true 
  - otherwise return false
 */

  let countOnes = 0,
    countZeros = 0,
    maxOnes = 0,
    maxZeros = 0;

  for (let value of s) {
    if (value == "1") {
      countOnes++;
      countZeros = 0;
     } else {
      countZeros++;
      countOnes = 0;
     }
     maxZeros = Math.max(maxZeros, countZeros);
     maxOnes = Math.max(maxOnes, countOnes);
  }

  console.log({ maxOnes, maxZeros });
  return maxOnes > maxZeros;
}
