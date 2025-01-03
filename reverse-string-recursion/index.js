// Write a function called reverseString that takes in a string and returns the reverse version of the string. Be sure to
// use recursion in your solution.

function reverseString(str) {
  // console.log(str);
  if (str === "") {
    return "";
  }
  // console.log(str.substr(1));
  return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello")); // olleh
// Push - Stack - Pop - charAt(0) - olleh;
// o;
// lo;
// llo;
// ello;
// hello;
