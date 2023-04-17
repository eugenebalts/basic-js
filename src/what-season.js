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
function getSeason(input) {
  if (!input) {
    return 'Unable to determine the time of year!'
  }
  try {
    input.getTime()
  }
  catch {
    throw new Error('Invalid date!') 
  }
  let answer = {
    'winter': [11, 12, 1],
    'spring' : [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn': [8, 9, 10]
  }
  let month = input.getMonth()
  if (month >= 2 && month <= 4) {
    return 'spring'
  } else if ((month >= 5 && month <= 7)) {
    return 'summer'
  } else if (month >= 8 && month <= 10) {
    return 'autumn'
  } else {
    return 'winter'
  }
}

module.exports = {
  getSeason
};

// console.log(getSeason('1, 1, 1'))
console.log(getSeason(new Date(2019, 11, 22, 23, 45, 11, 500)))
