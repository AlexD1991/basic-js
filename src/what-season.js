const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }
  if (
    typeof date.getMonth != "function" ||
    Object.prototype.toString.call(date) != "[object Date]"
  ) {
    throw new Error();
  }
  return months.get(date.getMonth());
};

let months = new Map();
months.set(0, "winter");
months.set(1, "winter");
months.set(2, "spring");
months.set(3, "spring");
months.set(4, "spring");
months.set(5, "summer");
months.set(6, "summer");
months.set(7, "summer");
months.set(8, "autumn");
months.set(9, "autumn");
months.set(10, "autumn");
months.set(11, "winter");
