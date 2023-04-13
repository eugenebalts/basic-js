const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == 'string') {
      result.push(array[i].slice(0,1).toUpperCase())
    } 
  }
  return result.sort()
}

module.exports = {
  createDreamTeam
};

// console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max', true]));
