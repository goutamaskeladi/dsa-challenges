// Implement a function called bubbleSort that takes an array of numbers as an argument and returns sorted array using
// Bubble sort algorithm.
// console.log(bubbleSort([5, 4, 3, 2, 1])); // Output: [1, 2, 3, 4, 5]

function bubbleSort(arr) {
  // loop through array
  for (let i = 0; i < arr.length; i++) {
    // for swapping, we don't go for further
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]
