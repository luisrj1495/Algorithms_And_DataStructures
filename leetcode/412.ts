function fizzBuzz(n: number): string[] {
  /**
  * - create an array called rta
  * - Loop 1 to n
  * - check the rules
  * - return rta
  * 
  * Rules
  * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
  */

  const rta: string[] = [];

  for (let i = 1; i <= n; i++) {
    const isMultipleOf3 = i % 3 == 0;
    const isMultipleOf5 = i % 5 == 0;

    if (isMultipleOf3 && isMultipleOf5) {
      rta.push("FizzBuzz");
      continue;
    }
    if (isMultipleOf3) {
      rta.push("Fizz");
      continue;
    }

    if (isMultipleOf5) {
      rta.push("Buzz");
      continue;
    }

    rta.push(i.toString());
  }

  return rta;
}
