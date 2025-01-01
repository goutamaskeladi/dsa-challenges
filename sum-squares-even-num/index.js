// Write a function called sumOfEvenSquares that takes an array of numbers
// and returns sum of squares of even numbers in array

function sumOfEvenSquares(arr) {
  const getEvenNumbers = arr.filter((num) => num % 2 === 0);
  const getSquareOfEvenNumbers = getEvenNumbers.map((num) => num * 2);
  const getSumofSquares = getSquareOfEvenNumbers.reduce(
    (acc, num) => acc + num
  );
  return getSumofSquares;
}

console.log(sumOfEvenSquares([1, 2, 3, 4, 5])); // 12
