const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(array) {
  let result = [];
  if (Array.isArray(array)) {
    // console.log('yes')
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'string') {
        let word = array[i];
        let finalWord = word.trim()
        result.push(finalWord[0].toUpperCase())
      }
    }
    result.sort()
    return result.join('')
  } else return false
}
module.exports = {
  createDreamTeam
};

// console.log(createDreamTeam(['Matt ADAMS', 'Ann', 'Dmitry', 'Max', true]));

// let word = 'Matt ADAMS';

// console.log(word.split(''))
