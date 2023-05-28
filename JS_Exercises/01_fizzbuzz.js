function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    let word = "";

    if (i % 3 === 0) {
      word += "fizz";
    }

    if (i % 5 === 0) {
      word += "buzz";
    }

    // if (i % 3 !== 0 && i % 5 !== 0) {
    //   console.log(i);
    if (word.length === 0) {
      console.log(i);
    } else {
      console.log(word);
    }
  }
}
fizzbuzz(100);
