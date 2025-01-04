/*
Example of constatnt time complexity O(1)
Constant time means the time required to complete a function is the same regardless of the size of the input data set
arr doesn matter an array with one element or thousand element
*/

function accessElement(arr, index) {
  return arr[index];
}

console.time("AE1");
console.log(accessElement([1, 2, 3, 4, 5, 6, 7, 8], 6)); // 2.375ms
console.timeEnd("AE1");
console.time("AE2");
console.log(accessElement([1, 2, 3], 1)); // 0.045ms
console.timeEnd("AE2");

console.time("A1");
console.log(Array.from({ length: 1000 }, (_, index) => index + 1)); // 3.072ms
console.timeEnd("A1");
