const { NotImplementedError } = require('../extensions/index.js');

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
  let res = 0
  for (let i = 0; i < matrix.length; i++) {

    // console.log(matrix[i - 1]);
     let curentSum = matrix[i].reduce((sum, el, ind, arr) => {

       if (matrix[i - 1] == undefined || matrix[i - 1][ind] != 0) {
         return sum + el
       }
  
       else {
         return sum + 0
       }
 
     }, 0)
     res += curentSum
  }
  // console.log(ii);
  return res
}

module.exports = {
  getMatrixElementsSum
};
// console.log(module.exports.getMatrixElementsSum([
//   [1, 1, 1],
//   [2, 2, 2],
//   [3, 3, 3],
// ]));