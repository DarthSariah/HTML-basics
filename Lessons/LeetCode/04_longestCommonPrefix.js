/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    let letter = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (letter !== strs[j][i]) {
        return prefix;
      }
    }

    prefix += letter;
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["flower", "flower", "flower"]));
console.log(
  longestCommonPrefix([
    "flowerflowerflower111",
    "flowerflowerflower222",
    "flowerflowerflower333",
  ])
);
