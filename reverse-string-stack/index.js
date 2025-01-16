// Write a function called reverseStringStack that takes in a string and returns a reverse version of the string.
// Example: reverseStringStack('hello') // olleh
// Push each characters onto the stack
// Pop the character from the stack to construct reversed string
const Stack = require("../stack-implementation");

function reverseStringStack(str) {
  const stackObj = new Stack();
  str.split("").map((item) => stackObj.push(item));
  let reverseString = "";
  while (!stackObj.isEmpty()) {
    reverseString += stackObj.pop();
  }
  return reverseString;
}

console.log(reverseStringStack("hello")); // olleh
