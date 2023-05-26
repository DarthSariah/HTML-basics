/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = x.toString();
  let reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
};

console.log(isPalindrome(-121));
