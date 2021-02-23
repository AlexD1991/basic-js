const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arrResult = Array.from(arr);
  let i = 0;
  while (i < arrResult.length) {
    if (arrResult[i] === "--discard-next") {
      if (
        arrResult[i + 2] === "--double-prev" ||
        arrResult[i + 2] === "--discard-prev"
      ) {
        arrResult.splice(i, 3);
      } else if (isToBeModified(arrResult[i + 1])) {
        arrResult.splice(i, 2);
      } else {
        arrResult.splice(i, 1);
      }
    } else if (arrResult[i] === "--discard-prev") {
      if (isToBeModified(arrResult[i - 1])) {
        arrResult.splice(i - 1, 2);
        i--;
      } else {
        arrResult.splice(i, 1);
      }
    } else if (arrResult[i] === "--double-next") {
      if (isToBeModified(arrResult[i + 1])) {
        arrResult[i] = arrResult[i + 1];
        i++;
      } else {
        arrResult.splice(i, 1);
      }
    } else if (arrResult[i] === "--double-prev") {
      if (isToBeModified(arrResult[i - 1])) {
        arrResult[i] = arrResult[i - 1];
        if (i != arrResult.length - 1) i++;
      } else {
        arrResult.splice(i, 1);
      }
    } else {
      i++;
    }
  }
  return arrResult;
};

function isToBeModified(element) {
  return (element || element === 0 || element === false || isNaN(element)) &&
    element !== undefined
    ? true
    : false;
}
