const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  chainArr: [],
  positionMistake: false,

  getLength() {
    return this.chainArr.length

  },
  addLink(value) {
    this.chainArr.push(`( ${String(value)} )`)
    return this

  },
  removeLink(position) {
    // console.log((position instanceof Number));  w8 a moment...
    if (!(Number.isInteger(position)) || position > this.chainArr.length  ||  position <= 0) {
      // this.positionMistake = true
      // || position < 0 || position != Math.round(position)
      // !(position instanceof Number)
      // || position > chainArr.length - 1
      // || position < 0 || position != Math.round(position)
      // console.log(position);
      this.chainArr = []
      // console.log(this.positionMistake);
      throw new Error('You can\'t remove incorrect link!')
     
    }
    else {
      this.chainArr.splice((position - 1), 1)
      return this

    }

  },
  reverseChain() {
    this.chainArr.reverse()
    // console.log(this.chainArr);
    return this
  },
  finishChain() {
    if (this.positionMistake) {
      this.chainArr = []
    }

    let ans = this.chainArr.join('~~')
    this.chainArr = []
    return ans
  }
};

module.exports = {
  chainMaker
};
// console.log(module.exports.chainMaker.addLink(1).addLink(2).removeLink('1').addLink(3).finishChain());
// console.log(module.exports.chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).removeLink(1).finishChain());
// console.log(module.exports.chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())
// let test = 2.5
// console.log(test instanceof Number);
// console.log(typeof(test));
// console.log(isFinite(test));
// console.log(Number.isInteger(test));
// console.log(typeof(test));
// cerf rfr z cnhflfk)))))