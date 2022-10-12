const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


  let str1Arr = [...str1]
  let str2Arr =[...str2]

  // console.log(str1Arr, 'arr');
  let max = Math.max(str1Arr.length, str2Arr.length)
  // console.log(str2Arr, 'arr');

let res = 0
  for (let i = 0; i < max; i++) {
    if (str2Arr.includes(str1Arr[i])){
      // это пиздец, а не ЯП, отвечаю. почему нельзя отнять массивы просто ебучие
      str2Arr[str2Arr.indexOf(str1Arr[i])] = ''
      res++
      continue
    }
  }

  return res
}

module.exports = {
  getCommonCharacterCount
};

// console.log(module.exports.getCommonCharacterCount('aabcc', 'adcaa'))
