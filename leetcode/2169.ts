function countOperations(num1: number, num2: number): number {
  /**
   * create a variable called operations equal to zero
   * While num1 > 0
   * if num1 >= num2
   *  - Then: num1 = num1 - num2
   *  - Otherwise: num2 = num2 - num1
   * Plus one in operations variable
   */

  let operations = 0;

  while (num1) {
    if (num1 >= num2) num1 = num1 - num2;
    else num2 = num2 - num1;
    operations++;
  }

  return operations;
}
