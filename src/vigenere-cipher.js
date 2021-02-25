const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect) {
    if (isDirect || isDirect === undefined) {
      this.mode = "direct";
    } else {
      this.mode = "reverse";
    }
  }

  encrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyArrOriginal = key.split("");
    let messageArr = message.split("");
    let keyArr = [];
    let i = 0;
    for (let symbol of messageArr) {
      if (isLatin(symbol)) {
        keyArr.push(keyArrOriginal[i % keyArrOriginal.length]);
        i++;
      } else {
        keyArr.push("");
      }
    }
    for (let i = 0; i < messageArr.length; i++) {
      if (isLatin(messageArr[i])) {
        messageArr[i] = String.fromCharCode(
          ((messageArr[i].charCodeAt() - 65 + keyArr[i].charCodeAt() - 65) %
            26) +
            65
        );
      }
    }
    return this.mode === "direct"
      ? messageArr.join("")
      : messageArr.reverse().join("");
  }
  decrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyArrOriginal = key.split("");
    let messageArr = message.split("");
    let keyArr = [];
    let i = 0;
    for (let symbol of messageArr) {
      if (isLatin(symbol)) {
        keyArr.push(keyArrOriginal[i % keyArrOriginal.length]);
        i++;
      } else {
        keyArr.push("");
      }
    }
    for (let i = 0; i < messageArr.length; i++) {
      if (isLatin(messageArr[i])) {
        let dif = messageArr[i].charCodeAt() - keyArr[i].charCodeAt();
        if (dif < 0) dif += 26;
        messageArr[i] = String.fromCharCode((dif % 26) + 65);
      }
    }
    return this.mode === "direct"
      ? messageArr.join("")
      : messageArr.reverse().join("");
  }
}

function isLatin(symbol) {
  return symbol.charCodeAt() >= 65 && symbol.charCodeAt() <= 90;
}

module.exports = VigenereCipheringMachine;
