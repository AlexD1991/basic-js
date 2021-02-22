const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(function (row) {
    row.forEach(function (element) {
      if (element === "^^") count++;
    });
  });
  return count;
};
