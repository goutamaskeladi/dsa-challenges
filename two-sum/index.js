// Write a function called twoSum that takes an array of integers and target integer as input and returns an array of indices
// of the two numbers that add up to the target
// twoSum([2, 7, 11, 15], 9)
// Output: [0, 1] ( 2 + 7 ) = 9
// twoSum([3, 2, 4], 6) - [1, 2] (2 + 4 - 6)
// You can use a Set to keep track of numbers you have seen so far while iterating through array

function twoSum(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== undefined) {
      if (arr[i] + arr[i + 1] === sum) {
        return [i, i + 1];
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15, 5, 9, 8, 1, 4, 3], 7)); // [8, 9]
