// Write a function called maxSubarraySum that takes an array of integers and positive integer k as input.
// The function should find the maximum sum of any subarray.
/*
  const arr1 = [2, 5, 3, 1, 11, 7, 6, 4]
  const k1 = 3
  console.log(maxSubarraySum(arr1, k1)) // Output: 24
*/

// Array length - 3, means 2, 5, 3 | 5, 3, 1 | 3, 1, 11 | 1, 11, 7 | 11, 7, 6 i.e 24
function maxSubarraySum(arr, k) {
  let maxSum = 0;
  for (let i = 0; i <= arr.length - k; i++) {
    let currentSum = 0;
    for (let j = i; j < i + k; j++) {
      currentSum += arr[j];
    }
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([2, 5, 3, 1, 11, 7, 6, 4], 3));
