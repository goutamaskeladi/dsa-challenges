// Write a function called longestConsecutiveSequence that takes an array of integers as input and returns the length
// of the longest consecutive sequence of integers in the array
// longestConsecutiveSequence([100, 4, 200, 1, 3, 2]) // Output is 4 [1, 2, 3, 4]
// You can use Set to efficiently find consecutive sequence in the array

function longestConsecutiveSequence(nums) {
  const numSet = new Set(nums);
  let longestSequence = 0;
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentSequence = 1;
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentSequence++;
      }
      longestSequence = Math.max(longestSequence, currentSequence);
    }
  }
  return longestSequence;
}

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])); // 4
