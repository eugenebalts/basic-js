const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(data) {
    this.chain.push(`( ${data} )`);
    return this;
  },

  removeLink(pos) {
    if (typeof pos  !== "number" || pos < 1 || pos > this.getLength()) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(pos - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = this.chain.join("~~");
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
