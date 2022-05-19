const getDiagonal = (params: { matrix: number[][]; x: number; y: number }) => {
  let factor = null;

  while (params.x >= 0 && params.y >= 0) {
    const value = params.matrix[params.x][params.y];
    if (factor === null) {
      factor = value;
    } else {
      if (value !== factor) return false;
    }
    params.x--;
    params.y--;
  }

  return true;
};

function isToeplitzMatrix(matrix: number[][]): boolean {
  /**
   * get x from matrix.length
   * get maxY from matrix[0].length
   */

  let x = matrix.length - 1;
  let y = 0;
  const yLimit = matrix[0].length - 1;

  while (x >= 0 && y <= yLimit) {
    const isAGoodDiagonal = getDiagonal({ matrix, x, y });

    if (!isAGoodDiagonal) return false;
    if (y >= yLimit) {
      x--;
    } else {
      y++;
    }
  }

  return true;
}

console.log(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ])
);

/**
 * [[1,2,3,4],
 * [5,1,2,3],
 * [9,5,1,2]]
 */

/**
 * [[0,33,98],
 * [34,22,33]]
 */