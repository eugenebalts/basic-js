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
  if (input) {

  } else return 'Unable to determine the time of year!'
}

module.exports = {
  getSeason
};

// console.log(getSeason('1, 1, 1'))
console.log((new Date(2022, 02, 01)))
