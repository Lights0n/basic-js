const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexes = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {


      indexes.push(i)
      // arr.splice(i, 1)
      delete arr[i]
      // console.log(arr, 'delete ', removed);

      //  шо су4ара, думал я не придумаю как тебя вернуть, га ? Сидеть!


    }
  }
  // console.log(indexes);
  // console.log(arr);
  let sorted = arr.sort(function (a, b) {

    return a - b
  })
  for (let i = 0; i < indexes.length; i++) {
    sorted.splice(indexes[i], 0, -1)
  }
  // console.log(sorted, 'dorted');
  sorted.splice(sorted.length - indexes.length, indexes.length)
  // console.log(sorted, 'Sorted');
  return sorted;
}

module.exports = {
  sortByHeight
};
// console.log(module.exports.sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));