/**
 * Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
 */

function diagonalSum(mat: number[][]): number {
  /**
   * Create two pointers left and right
   *  - Left starts on zero
   *  - Right starts on mat[0].length - 1
   * Create a variable called total
   * Loop the matrix
   * if left and right are equal
   *  - Then: Only sum on total one value
   * sum on total the value from index,left and index,right
   *  - Plus 1 to left
   *  - Subtract 1 on right
   *
   */

  let total = 0;
  let left = 0;
  let right = mat[0].length - 1;

  for (let row = 0; row < mat.length; row++) {
    if (left === right) {
      total += mat[row][left];
    } else {
      total += mat[row][left];
      total += mat[row][right];
    }
    left++;
    right--;
  }

  return total;
}
