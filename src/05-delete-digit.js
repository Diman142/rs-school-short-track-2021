/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');

  let min = Infinity;

  arr.forEach((num) => {
    min = Math.min(min, +num);
  });

  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] === min) {
      arr.splice(i, 1); break;
    }
  }

  return +arr.join('');
}

module.exports = deleteDigit;
