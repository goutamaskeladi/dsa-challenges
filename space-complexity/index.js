/*
  Space Complexity - O(1)
  Time Complexity - O(1)
*/

function add(num1, num2) {
  return num1 + num2;
}
// Doesn't create any additional function or variables based on the input. So space is O(1).
console.log(add(10, 10)); // 20

/*
  Space Complexity - O(n)
  Time Complexity - O(n)
*/

function createArray(num) {
  const result = [];
  for (let i = 0; i <= num; i++) {
    result.push(i);
  }
  return result;
}
// Because of the single loop it is O(n)
console.log(createArray(5)); // [ 0, 1, 2, 3, 4, 5 ]

/*
  Space Complexity - O(n^2)
  Time Complexity - O(n^2)
*/

function createMatrix(num) {
  const matrix = [];
  for (let i = 0; i <= num; i++) {
    matrix[i] = [];
    for (let j = 0; j <= num; j++) {
      matrix[i][j] = i + j;
    }
  }
  return matrix;
}
// Because of two nested for loops it is O(n^2)
console.log(createMatrix(5));

/*
  Space Complexity - O(1)
  Time Complexity - O(n)
*/

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(findSum([1, 2, 3, 4, 5])); // 15
