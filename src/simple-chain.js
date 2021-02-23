const CustomError = require("../extensions/custom-error");

const chainMaker = {
  elementsOfChain: [],
  getLength() {
    return this.elementsOfChain.length;
  },
  addLink(value) {
    this.elementsOfChain.push(value);
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      (!this.elementsOfChain[position - 1] &&
        this.elementsOfChain[position - 1] !== false)
    ) {
      this.reset();
      throw Error();
    }
    this.elementsOfChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.elementsOfChain.reverse();
    return this;
  },
  finishChain() {
    let str = "";
    for (let i = 0; i < this.elementsOfChain.length - 1; i++) {
      str += "( " + this.elementsOfChain[i] + " )~~";
    }
    str += "( " + this.elementsOfChain[this.elementsOfChain.length - 1] + " )";
    this.reset();
    return str;
  },
  reset() {
    this.elementsOfChain = [];
  },
};

module.exports = chainMaker;
