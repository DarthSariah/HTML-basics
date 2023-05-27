function deleteLetterFromWord(x, word) {
  let newWord = "";
  for (let i = 0; i <= word.length - 1; i++) {
    if (word[i] !== x) {
      newWord += word[i];
    }
  }
  console.log(newWord);
}

deleteLetterFromWord("a", "ananas");
