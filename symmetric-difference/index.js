// Write a function called symmetricDifference that takes in two arrays and returns an array containing symmetric difference
// of the two arrays.
// symmetricDifference([1, 2, 3], [3, 4, 5]) // [1, 2, 3, 4, 5]
// symmetricDifference([1, 2, 2, 3, 4], [2, 3, 3, 4, 5]) // [1, 5]
// You can use two Sets to keep track of elements in both arrays and then find the element that are present in only one of the set

const symmetricDifference = (arr1, arr2) => {
  const firstArray = new Set(arr1);
  const secondArray = new Set(arr2);
  const commonArray = [];
  for (let item of firstArray) {
    if (!secondArray.has(item)) {
      commonArray.push(item);
    }
  }
  for (let item of secondArray) {
    if (!firstArray.has(item)) {
      commonArray.push(item);
    }
  }
  return commonArray;
};

console.log(symmetricDifference([1, 2, 2, 3, 4], [2, 3, 3, 4, 5])); // [ 1, 5 ]
