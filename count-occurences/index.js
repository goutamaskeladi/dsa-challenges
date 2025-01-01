// write a function called countOccurences() that takes a string and a character
// and returns the number of occurences of that character in the string
// countOccurrences('hello', 'l') // 2

function countOccurences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count = count + 1;
    }
  }
  return count;
}

console.log(countOccurences("hello world", "x")); // 3
