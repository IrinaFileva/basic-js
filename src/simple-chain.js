const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array : [],

  getLength() {
    this.array.length;
    return this;
  },
  addLink(value) {
    this.array.push(String(value));
    return this;
  },
  removeLink(position) {
    if(Number.isInteger(position) && position -1 < this.array.length && position -1 >= 0 ){
      this.array.splice(position -1, 1);
      return this;
    }
    else{
      this.array = [];
      throw new Error('You can\'t remove incorrect link!');
    }
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    const copy = [...this.array];
    this.array =[];
    return `( ${copy.join(' )~~( ')} )`;
  }
};

module.exports = {
  chainMaker
};
