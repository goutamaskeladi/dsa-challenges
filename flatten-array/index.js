// Write a function called flattenArray that takes in an array containing nested array of integers and returns a new array
// with all the integers from the nested arrays flattened into a single level.
// flattenArray([1, [2, 3], [4, 5, [6]]]) should return [1, 2, 3, 4, 5, 6]

function flattenArray(arr) {
  // Final flatten array
  let result = [];
  // Loop through array items
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flattenArray([1, [2, 3], [4, 5, [6]]])); // [ 1, 2, 3, 4, 5, 6 ]
