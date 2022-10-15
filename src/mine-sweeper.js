const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number  in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let coords = {}
  let res = []
  for (let line of matrix) {
    res.push(new Array(line.length).fill(0))
  }

  for (let i = 0; i < matrix.length; i++) {
    // console.log('new line starts');
    for (let j = 0; j < matrix[i].length; j++) {

      coords.top = i - 1;
      coords.right = j + 1;
      coords.bottom = i + 1;
      coords.left = j - 1;

      if (matrix[i][j] == true) {
        // top-left lines
        if (res[coords.top] != undefined && res[coords.left] != undefined) {
          res[coords.top][coords.left] += 1
        }
        // top
        if (res[coords.top] != undefined) {
          console.log();
          res[coords.top][j] += 1
        }
        // top-right
        if (res[coords.top] != undefined && res[coords.right] != undefined) {
          res[coords.top][coords.right] += 1
        }
        // right
        if (res[coords.right] != undefined) {
          res[i][coords.right] += 1
        }
        // right-bottom
        if (res[coords.bottom] != undefined && res[coords.right] != undefined) {
          res[coords.bottom][coords.right] += 1
        }
        // bottom
        if (res[coords.bottom] != undefined) {
          res[coords.bottom][j] += 1
        }
        // bottom-left
        if (res[coords.bottom] != undefined && res[coords.left] != undefined) {
          res[coords.bottom][coords.left] += 1
        }
        // left
        if (res[coords.left] != undefined) {
          res[i][coords.left] += 1
        }

      }

    }
  }

  return res
}

module.exports = {
  minesweeper
};
// console.log(module.exports.minesweeper([
//   [true, false, false],
//   [false, true, false],
//   [false, false, false]
// ]));
