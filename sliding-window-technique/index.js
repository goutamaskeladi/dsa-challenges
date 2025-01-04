// Write a function called maxSubArraySum that takes an array of integers and positive integer k as input.
//  The function should find the maximum sum of any subarray of length k using O(n) solution using sliding window technique
/*
window size 3
-----
2 5 3 1 11 7 6 4
   slide one element forward
  -----
2 5 3 1 11 7 6 4
*/
function maxSubArraySum(arr, k) {
  let currentSum = 0;
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }
  currentSum = maxSum;
  for (let i = k; i < arr.length; i++) {
    console.log(i, k);
    // i = 3  3 < 8
    // 10 - 2 + 1 = 9
    // i = 4  4 < 8
    // 9 - 5 + 11 = 15
    currentSum = currentSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([2, 5, 3, 1, 11, 7, 6, 4], 3)); // 24

// 3 1 11
// Sum of previous index values - previous index value + Last index value
// 9 - 5 + 11 - 15

// 1, 11, 7
// 15 - 3 + 7 = 19
