// Write a function called fibonacci that takes in a number and returns the number at the index of fibonacci sequence.
// fibonacci(4) // 3
// The formula -
/*
  F(n) = F(n - 1) + F(n - 2) means in the sequence
  0, 1, 1, 2, 3, 5, 8, 13
  F(8) = F(8 - 1) i.e one less not subtration i,e 5 and F(8 - 2) i.e 3 so 5 + 3 = 8
*/

function fibonacci(num) {
  // where num is base case and index
  console.log(`Calculating fibonacci`, num);
  if (num < 2) {
    return num;
  }
  console.log(`Calculating fibonacci`, num - 1, num - 2);
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(5));
