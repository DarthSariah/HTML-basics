// let word = "love";
// for (let i = 0; i < word.length; i++) {
//   console.log(word[i]);
// }

function whatever(word) {
  let reverseWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  console.log(reverseWord);
}
whatever("love");
