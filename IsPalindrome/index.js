// Using Queue and Stack data structure, solve the string is an palindrome.
// The function should return true if the string is a palindrome and false if its not.
// Use the Queue and Stack data structure to solve this problem.
// Ex: RADAR - RADAR, CIVIC

const Stack = require("../stack-implementation");

function checkIsPalindrome(str) {
  const stack = new Stack();
  const initialString = str;
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let reverseString = "";
  while (!stack.isEmpty()) {
    reverseString += stack.pop();
  }
  return reverseString === initialString;
}

console.log(checkIsPalindrome("CIVIC")); // false
