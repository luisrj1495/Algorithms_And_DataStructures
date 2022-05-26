function removeDigit(number: string, digit: string): string {
  let max = "";

  for (let index = 0; index < number.length; index++) {
    if (number[index] === digit) {
      const newNumber =
        number.substring(0, index) + number.substring(index + 1);

      if (newNumber > max) max = newNumber;
    }
  }

  return max;
}
