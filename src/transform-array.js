const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length === 0) {
    return arr;
  }
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    // let command = {
    //   '--discard-next' : `${i += 1}`,
    //   '--discard-prev' : `${arr[i - 1] ? result.splice(arr[i - 1], 1) : ''}`,
    //   '--double-next': `${result.push(arr[i + 1])}`,
    //   '--double-prev': `${result.push(arr[i - 1])}`
    // }

    if (arr[i] == '--discard-next') {
      i += 1
    } else if (arr[i] == '--discard-prev') {
      result.push(arr[i + 1])
    } else if (arr[i] == '--double-next') {
      result.push(arr[i + 1])
    } else if (arr[i] == '--double-prev') {
      arr[i - 1] ? result.push(arr[i - 1]) : false
    } else {
      result.push(arr[i]);
    }
  }
  return result
}

module.exports = {
  transform
};

console.log(transform(['--double-prev', 1, 2, 3]))
