/*
Linear Time O(n)
Linear time means the time required to complete a function or algorithm is directly propotinal to size of the input data set.
*/

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.time("A1");
console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // 45
console.timeEnd("A1"); // A1: 2.382ms

console.time("A2");
console.log(sumArray(Array.from({ length: 1000000 }, (_, index) => index + 1))); // 500000500000
console.timeEnd("A2"); // A2: 52.071ms
