const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members
    .filter((name) => isString(name))
    .map((name) => name.trim())
    .map((name) => name.toUpperCase())
    .sort()
    .map((name) => name[0])
    .join("");
};

function isString(str) {
  return typeof str === "string";
}
