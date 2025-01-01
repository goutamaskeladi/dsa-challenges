// write a function reverse string, that returns reverse of the string.
// reverseString('hello') - olleh

function reverseString(str) {
  return str?.split("")?.reverse()?.join("");
}

console.log(reverseString("hello")); // olleh

function reverseStringByLoop(str) {
  let reverseStr = "";
  const strLength = str?.length - 1;
  for (let i = strLength; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}

console.log(reverseStringByLoop("world")); // dlrow
