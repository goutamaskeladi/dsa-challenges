// Write a function called removeDuplicates that takes an array and returns a new array with duplicates removed
// removeDuplicates([1, 2, 1, 3, 4, 4, 5, 6, 7, 8]) - [1, 2, 3, 4, 5, 6, 7, 8]
// removeDuplicates([1, 2, 1, 3, 4, 'hello', 'test', 'hello']) - [1, 2, 3, 4, 'hello', 'test']

function removeDuplicates(arr) {
  const uniqueArry = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArry.includes(arr[i])) {
      uniqueArry.push(arr[i]);
    }
  }
  return uniqueArry;
}

console.log(removeDuplicates([1, 3, 1, 4, "test", 123, "test"])); // [ 1, 3, 4, 'test', 123 ]
