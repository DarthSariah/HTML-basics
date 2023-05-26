/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord_old = function (s) {
  s = s.trim();
  if (s.split(" ").length === 1) return s.length;
  let counter = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " " && counter !== 0) {
      return counter;
    } else if (s[i] !== " ") {
      counter++;
    }
  }
};

var lengthOfLastWord_v1 = function (s) {
  for (let i = s.split(" ").length - 1; i >= 0; i--) {
    if (s.split(" ")[i].length !== 0) return s.split(" ")[i].length;
  }
};

var lengthOfLastWord = function (s) {
  return s.trim().split(" ").reverse()[0].length;
};

console.log(lengthOfLastWord_old("a "));
// console.log(lengthOfLastWord("   fly me   to   the moon  "));
// console.log(lengthOfLastWord("luffy is still joyboy"));
