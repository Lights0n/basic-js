const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(activity) {
  // console.log(typeof (activity) == 'string');
  // console.log(typeof (+activity));

  if ((typeof (activity) == 'string' && typeof (+activity) == 'number' && +activity > 0 && +activity < 15)) {
    const MODERN_ACTIVITY = 15;
    const HALF_LIFE_PERIOD = 5730;
    let k = 0.693 / HALF_LIFE_PERIOD
    let answer = (Math.log(MODERN_ACTIVITY / +activity)) / k
    answer = Math.ceil(answer)
    return answer
  }
  else {
    return false
  }

}

module.exports = {
  dateSample
};

// console.log(module.exports.dateSample('0.1'))