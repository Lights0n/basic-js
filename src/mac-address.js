const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(address) {
  // console.log(parseInt('f', 16), '_ga?');
  // console.log((15).toString(16), '_ga?');
  let res
  address = address.toLowerCase()
  res = parseInt(address.split('-')[0], 16);
  let ans = address.split('-').every( function(el) {
    if (el == (parseInt(el, 16)).toString(16) ){
      return true
    }
    else if (el == '00'){
      return true
    }
    else{
      // console.log(el);
      // console.log((parseInt(el, 16)).toString(16));
      return false
    }
  })
  // console.log(ans, ' yess?');
  return ans

}
module.exports = {
  isMAC48Address
};
// console.log(module.exports.isMAC48Address('FF-FF-FF-FF-FF-FF'));
// console.log(module.exports.isMAC48Address('00-1B-63-84-45-E6'));