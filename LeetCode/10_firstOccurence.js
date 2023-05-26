/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    let slice = haystack.slice(i, needle.length + i);
    if (slice === needle) return i;
  }

  return -1;
};

console.log(strStr("butsadbutsad", "sad"));
