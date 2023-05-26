/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  const symDict = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  console.log(s); // print initial string
  while (s.length > 0) {
    let foundClosing = false;
    for (let i = 0; i < s.length; i++) {
      const keys = Object.keys(symDict); // ["(", "[", "{"]
      if (!keys.includes(s[i])) {
        foundClosing = true;
        if (symDict[s[i - 1]] === s[i]) {
          let slice1 = s.slice(0, i - 1);
          let slice2 = s.slice(i + 1);
          s = slice1 + slice2;

          console.log(s); // print the new sliced string

          break;
        } else {
          return false;
        }
      }
    }

    if (!foundClosing) return false;
  }

  return true;
};

console.log(isValid("[({(())}[()])]"));
