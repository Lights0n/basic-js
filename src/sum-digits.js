const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let ans = 0

  function rec(n) {
    if (n.toString().length == 1) {

      return n
    }
    else {
      let newN = []
      for (let item of [...n.toString()]){
        newN.push(+item)
      }
      newN = newN.reduce((sum, el)=>{ return sum + el}, 0)
      // console.log(newN);
      return rec(newN)
    }


  }
  return rec(n)

}

module.exports = {
  getSumOfDigits
};

// console.log(module.exports.getSumOfDigits(999))