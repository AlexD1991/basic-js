const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.maxDepth = 1;
    this.currentDepth = 1;
  }
  calculateDepth(arr) {
    for (let el of arr) {
      if (isArray(el)) {
        this.currentDepth++;
        if (this.maxDepth < this.currentDepth)
          this.maxDepth = this.currentDepth;
        this.calculateDepth(el);
      }
    }
    if (this.currentDepth !== 1) {
      this.currentDepth--;
    } else {
      let result = this.maxDepth;
      this.maxDepth = 1;
      return result;
    }
  }
};

function isArray(element) {
  return Array.isArray(element);
}
