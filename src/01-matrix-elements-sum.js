/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let flag = false;

  for (let i = matrix.length - 1; i > 0; i--) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        flag = true;
        for (let k = 0; k < i; k++) {
          sum += matrix[k][j];
        }
      }
    }
  }

  if (!flag) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
      }
    }
  }

  return sum;
}

module.exports = getMatrixElementsSum;
