const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // let array = (n + '').split('');
  // let minNum = (Math.min(...array))
  // let result = array.replace(minNum, '')
  // result = array.filter(item => item != minNum)
  let number = n + 'n';
  let minNum = Math.min(...number)
  return parseInt(number.replace(minNum, ''))
}

module.exports = {
  deleteDigit
};

console.log(deleteDigit((342)))
