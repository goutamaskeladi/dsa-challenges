// Write a function called power that takes a base and an exponent and returns result of raising the base to the power of exponent
// Use recursion to solve this problem
// power(2, 3) // 8

function power(a, b) {
  // Base case
  if (b === 0) {
    return 1;
  }
  // Recursive case
  return a * power(a, b - 1);
}

console.log(power(5, 3)); // 125
