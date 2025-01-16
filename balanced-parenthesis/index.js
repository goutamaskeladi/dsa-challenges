// Write a function called isBalanced that takes a string and checks if the parenethesis are balanced.
// Ex: isBalanced('()'); // true
// isBalanced(')('); // false
// String will only contain parenthesis and no other characters
// Push each opening parenthesis onto the stack
// Pop the stack when a closing parenthesis is enclosed

const Stack = require("../stack-implementation");

function balancedParenthesis(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else if (str[i] === ")") {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.isEmpty();
}

console.log(balancedParenthesis("(()))")); // false
