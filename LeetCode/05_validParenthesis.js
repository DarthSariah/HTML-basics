/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const symDict = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  let open = 0;
  let closed = 0;
  for (let i = 0; i < s.length; i++) {
    const keys = Object.keys(symDict); // ["(", "[", "{"]
    if (keys.includes(s[i])) {
      if (open > 0 && closed > 0 && closed !== open) return false;
      open++;
    } else {
      closed++;
      if (closed > open) return false;
      if (open === closed) {
        let startIndex = i - (open * 2 - 1);
        let closingIndex = startIndex + open * 2 - 1;

        let slice = s.slice(startIndex, closingIndex + 1);

        let firstHalf = slice.slice(0, slice.length / 2);
        let secondHalf = slice
          .slice(slice.length / 2)
          .split("")
          .reverse()
          .join("");

        for (
          let letterIndex = 0;
          letterIndex < firstHalf.length;
          letterIndex++
        ) {
          if (symDict[firstHalf[letterIndex]] !== secondHalf[letterIndex])
            return false;
        }

        // Preparation for next blocks
        open = 0;
        closed = 0;
      }
    }
  }

  if (open !== closed) return false;

  return true;
};

console.log(isValid("()()([{}])"));
