const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {}
  for (let el of domains) {
    // console.log(el.split('.'));
    let smalEl = el
    if (res[`.${smalEl}`]) {
      res[`.${smalEl}`] += 1
    }
    else {
      res[`.${smalEl}`] = 1
    }
    for (let i = 0; i < el.split('.').length - 1; i++) {
      smalEl = smalEl.slice(smalEl.indexOf('.') + 1)

      // console.log(el, '___elem');
      // console.log(smalEl);
      if (res[`.${smalEl}`]) {
        res[`.${smalEl}`] += 1
      }
      else {
        res[`.${smalEl}`] = 1
      }

    }
  }
  let res2 ={}
  for (let i = 0; i < Object.keys(res).length; i++) {
    let el =  Object.keys(res)[i]
    let elArr = el.split(".").reverse()

    let elArr2 = elArr.map((el)=>{
      return el =`.${el}`
    })
    elArr2.length = elArr2.length -1
    // console.log(elArr2.join(''),'___');

    el = elArr2.join('')
    Object.keys(res)[i] = [elArr2.join('')]
    // console.log( Object.values(res)[i], 'NNNNNN');
    res2[elArr2.join('')] = Object.values(res)[i]
  }
  // console.log(res2, 'YES?');
  return res2
}

module.exports = {
  getDNSStats
};
// console.log(module.exports.getDNSStats([
//   'code.yandex.ru',
//   'music.yandex.ru',
//   'yandex.ru'
// ]))
