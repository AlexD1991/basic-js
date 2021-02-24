const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let resultStr = "";

  let map = new Map(Object.entries(options));
  str = str + "";
  let repeatTimes = Number.isInteger(map.get("repeatTimes"))
    ? map.get("repeatTimes")
    : 1;
  let separator = map.get("separator") ? map.get("separator") : "+";
  let addition =
    map.get("addition") ||
    map.get("addition") === false ||
    map.get("addition") === null
      ? map.get("addition") + ""
      : "";
  let additionRepeatTimes = Number.isInteger(map.get("additionRepeatTimes"))
    ? map.get("additionRepeatTimes")
    : 1;
  let additionSeparator = map.get("additionSeparator")
    ? map.get("additionSeparator")
    : "|";

  for (let mainCount = 0; mainCount < repeatTimes; mainCount++) {
    resultStr += str + "";
    for (
      let additionalCount = 0;
      additionalCount < additionRepeatTimes;
      additionalCount++
    ) {
      resultStr +=
        additionalCount === additionRepeatTimes - 1
          ? addition
          : addition + additionSeparator;
    }
    resultStr += mainCount === repeatTimes - 1 ? "" : separator;
  }

  return resultStr;
};
