const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  // let date = new Date(2025, 1, 22, 23, 45, 11, 500)
  // throw new NotImplementedError('Not implemented');

  let real = new Date(2025, 1, 22, 23, 45, 11, 500)
  if (arguments[0] == undefined) {
    console.log(date, '<- Unable ->');
    return 'Unable to determine the time of year!'
  }
  // утки не пройдут
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length != Object.getOwnPropertyNames(real).length) {
    throw new Error('Invalid date!')
  }
  let month = date.getMonth()

  if (month == 0 || month == 1 || month == 11) {
    return 'winter'
  }
  else if (month == 2 || month == 3 || month == 4) {
    return 'spring'
  }
  else if (month == 5 || month == 6 || month == 7) {
    return 'summer'
  }
  else if (month == 8 || month == 9 || month == 10) {
    return 'fall'
  }
}

module.exports = {
  getSeason
};
// console.log(module.exports.getSeason());
