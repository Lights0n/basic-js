const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 * @param {Number} n
 * @return {Number}
 * @example
 * For n = 152, the output should be 52
 */
function deleteDigit(number2) {
  let number = Array.from(number2.toString())
  // console.log(number);
  let min = number.slice(1, number.length)
  // console.log(min, 'min');
  for (i = 0; i < number.length; i++) {
    // ебануцца як
    let ii = number.slice(0, i).concat(number.slice(i+1, number.length))
    // console.log(min, 'min');
    // console.log(ii, 'ii');
    if (ii > min){
      min = ii
    }
  }
  return +(min.join(''))
}

module.exports = {
  deleteDigit
};

// console.log(module.exports.deleteDigit(1352))
// console.log(module.exports.deleteDigit(1001))