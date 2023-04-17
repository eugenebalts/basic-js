const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    for (let i = 0; i< arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let flatArray = this.calculateDepth(arr.flat());
        count += flatArray
        break;
      }
    }
    return count;
  }
}

module.exports = {
  DepthCalculator
};

let array = new DepthCalculator();

console.log(array.calculateDepth([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
