/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  const currentLength = arr.length;
  let count = 0

  while (count < currentLength) {
    if (arr[count] === 0) {
      arr.splice(count, 0, 0);
      count++;
    }
    count++;
  }

  arr.length = currentLength;
}
