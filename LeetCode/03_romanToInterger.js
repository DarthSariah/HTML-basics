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
  let s = "";

  const charMatrix = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };

  let splitStr = str.split("");

  for (i = 0; i < splitStr.length; i++) {}
};

console.log(romanToInt("LVIII"));
