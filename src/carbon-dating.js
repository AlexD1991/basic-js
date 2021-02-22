const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (!isNumeric(sampleActivity)) {
    return false;
  }
  let result = Math.ceil(
    (Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD) / 0.693
  );
  return Number.isInteger(result) && result >= 0 ? result : false;
};

function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}
