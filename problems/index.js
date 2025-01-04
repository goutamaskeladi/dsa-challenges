// Sliding Window Problem

function sliding_window_problem(arr, k) {
  // Solution - sum of last 3 index - last index value + current index last value
  let max_sum = 0; // which hold maxium value of both (initial & later)
  let current_sum = 0; // which hold addition of k values
  // Lets calculate for first 3 index
  for (let i = 0; i < k; i++) {
    max_sum += arr[i];
  }
  current_sum = max_sum;
  for (let i = k; i < arr.length; i++) {
    current_sum = current_sum - arr[i - k] + arr[i];
    max_sum = Math.max(max_sum, current_sum);
  }
  return max_sum;
}

console.log(sliding_window_problem([1, 2, 3, 3, 1, 7, 5, 4, 6, 2], 3)); // 16

// 3 1 7 - 11
// 7 - 3 + 7 - 11
