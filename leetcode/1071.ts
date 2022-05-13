const isDivisor = (params: { str1: string; str2: string; divisor: string }) =>
  !params.str1.split(params.divisor).join("") &&
  !params.str2.split(params.divisor).join("");

function gcdOfStrings(str1: string, str2: string): string {
  /**
   * - Find the lower string and it will be the divisor
   * - While divisor has values
   *    - check if it is the divisor (using split in both string)
   *    - if it is the divisor return divisor
   *    - else cut the last character in the divisor
   */

  let divisor = str1.length > str2.length ? str2 : str1;

  while (divisor) {
    if (isDivisor({ str1, str2, divisor })) return divisor;
    divisor = divisor.slice(0, divisor.length - 1);
  }

  return divisor;
}

/**
 * .repeat(str1.length - str2.length)
 * str1 = "ABABAB", str2 = "ABAB"
 * ABABAB == ABABABAB
 * ABABAB == A
 *
 *
 *
 */
