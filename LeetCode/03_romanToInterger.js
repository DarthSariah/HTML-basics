/**
 * set constant values ("I"=1 < "V"=5 < "X"=10 < "L"=50 < "C"=100 < "D"=500 < M"=1000)
 * set valid combinations? ("II"=2, "III"=3, "IV"=4, "IX"=9)
 * can substract "I" only from "V" or "X", can add "I", "II" or "III" to anything
 *
 * split string into single characters
 * loop through all of them
 *
 * if index is one of the constant values, store it in a var(num) as its assigned number
 *
 * if "I" is 2 or 3 times in a row, join and assign number 2 or 3
 * if "I" is followed by "V" or "X", join and assign number 4 or 9
 * if "X" is followed by "L", join and assign number 40
 * if "X" is followed by "C", join and assign number 90
 * if "C" is followed by "D", join and assign number 400
 * if "C" is followed by "M", join and assign number 900
 *
 * after loop is finished, add all the stored numbers in the var(num) to get final result
 *
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const charDict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // I can be placed before V (5) and X (10) to make 4 and 9.
  // X can be placed before L (50) and C (100) to make 40 and 90.
  // C can be placed before D (500) and M (1000) to make 400 and 900.

  let splitStr = s;
  let num = 0;

  let lastLetter = "";

  for (let i = 0; i < splitStr.length; i++) {
    let letter = splitStr[i];
    num += charDict[letter];

    if ((letter === "V" || letter === "X") && lastLetter === "I") {
      num -= 1 * 2;
    }

    if ((letter === "L" || letter === "C") && lastLetter === "X") {
      num -= 10 * 2;
    }

    if ((letter === "D" || letter === "M") && lastLetter === "C") {
      num -= 100 * 2;
    }

    lastLetter = letter;
  }

  return num;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
