const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(...args) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = 0
  let full = args.flat(2)
  let s = full.map((el) => {
    if (el == "^^") {
      console.log('we got it', el);
      res += 1
    }
  })

  return res

}

module.exports = {
  countCats
};
// console.log(module.exports.countCats(['##', 'dd', '00'],
//   ['^', '^', 'ss'],
//   ['AA', 'dd', 'Oo']))