function findFactorial(num) {
  // Factorial of 5 = 5 * 4 * 3 * 2 * 1
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i; // result = result * i
  }
  return result;
}

console.log(findFactorial(5)); // 120
