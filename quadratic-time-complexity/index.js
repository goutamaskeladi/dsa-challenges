/*
Quadratic Time - O(n^2)
Quadratic time means that time required to complete a function is propotinal to the square of the input data set
*/

function sumArray(arr) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
    for (let j = 0; j < arr.length; j++) {
      sum2 += arr[j];
    }
  }
  console.log(sum1, sum2);
  return sum1 + sum2;
}

console.log(sumArray([1, 2, 3, 4, 5]));

// 15 75
// 90
