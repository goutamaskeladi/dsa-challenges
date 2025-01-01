// Find a missing number in an array of unique numbers
// findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]) // 5
// The formula is n * (n + 1)/ 2 where n is the length of the array + 1

const findMissingNumber = (arr) => {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2; // Guss formula 55 or add everything including missing number i.e 55
  const actualSum = arr.reduce((acc, item) => acc + item); // 50
  return expectedSum - actualSum; // expected - actual
};

console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 8, 9, 10])); // 7
