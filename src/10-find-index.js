/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function findIndex(array, value) {
  let firstInd = 0;
  let lastInd = array.length - 1;

  let isFind = false;
  let res = -1;

  while (!isFind && firstInd <= lastInd) {
    const mid = Math.floor((firstInd + lastInd) / 2);

    if (array[mid] === value) {
      res = mid;
      isFind = true;
    } else if (array[mid] > value) {
      lastInd = mid - 1;
    } else {
      firstInd = mid + 1;
    }
  }

  return res;
}

module.exports = findIndex;
