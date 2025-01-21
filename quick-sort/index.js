// Implement a function called quickSort that takes an array of numbers as an arguments and return sorted array using
// Quick Sort Algorithm

const array = [20, 13, 3, 2, 10, 1, 5, 6];

function quickSort(arr) {
  // base case, when array divided into single element
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1]; // last element in the array
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(array));

/*
[
  1,  2,  3,  5,
  6, 10, 13, 20
]
*/
