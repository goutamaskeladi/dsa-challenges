// Function takes array of numbers and returns largest number in the array
// findMaxNumber([1,3,6,2,9,8,7,5]) // 9

const findLargest = (arr) => Math.max(...arr);

console.log(findLargest([1, 3, 6, 2, 9, 8, 7, 5])); // 9

function findMaxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMaxNumber([1, 3, 6, 2, 10, 9, 8, 7, 5])); // 10
// 1 < 3 // 3
// 3 < 6 // 6
// 6 < 2 // 6
// 6 < 10 // 10
