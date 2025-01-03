// Write a function called factorial

function factorial(num) {
  if (num === 1 || num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5)); // 120
