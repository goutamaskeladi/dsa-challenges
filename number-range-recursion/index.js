// Write a function called numberRange that takes a startNum and endNum and returns an array of numbers from startNum to
// endNum, inclusive.
// numberRange(1, 5) - [1, 2, 3, 4, 5]
// You can construct an array by first calling numberRange on a smaller range and then adding the endNum to the array.

const arr = [];
function numberRange(start, end) {
  // Base Case
  if (start > end) {
    return arr;
  }
  // Recursive Case
  arr.push(start);
  return numberRange(start + 1, end);
}

console.log(numberRange(1, 5)); // [1, 2, 3, 4, 5]
