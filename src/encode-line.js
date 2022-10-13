const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let ans = []
  let counter = 1
  for (let i = 0; i < str.length; i++) {

    if (str[i] == str[i + 1]) {
      counter += 1
      continue
    }
    if ((str[i] != str[i + 1]) && counter != 1) {

      ans.push(counter)
      ans.push(str[i])
      counter = 1
    } else if ((str[i] != str[i + 1]) && counter == 1) {
      ans.push((str[i]))
    }

  }

  console.log(ans);
  return ans.join('')
}

module.exports = {
  encodeLine
};
// console.log(module.exports.encodeLine('abbcca'));
// console.log(module.exports.encodeLine('aaaatttt'));
// a2b2ca