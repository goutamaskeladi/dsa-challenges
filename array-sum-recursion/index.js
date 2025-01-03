// Write a function called arraySum that takes in an array of numbers and return their sum using recursion
// arraySum([1, 2, 3, 4, 5]) // 15

function arraySum(arr) {
  // Base Case
  if (arr.length === 0) {
    return 0;
  }
  // Recursive Case
  return arraySum(arr.splice(1)) + arr[0];
}

console.log(arraySum([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 45
