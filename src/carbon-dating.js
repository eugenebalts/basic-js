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
function dateSample(input) {
  if (typeof input !== 'string' || input > MODERN_ACTIVITY || input * 1 <= 0 || isNaN(input)) {
    return false;
  }
  let k = (0.693 / HALF_LIFE_PERIOD);
  let log = Math.log(MODERN_ACTIVITY / input)
  return Math.ceil(log / k)
}

module.exports = {
  dateSample
};


console.log(dateSample('3.1'))

