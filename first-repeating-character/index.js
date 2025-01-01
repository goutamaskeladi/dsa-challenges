// Write a function called firstNonRepeatingCharacter that takes in a string and returns first non-repeating character
// in the string. firstNonRepeatingCharacter('abcdef') // 'a'
// firstRepatingCharacter('aabbcc') // null

function firstRepatingCharacter(str) {
  const chars = str.split("");
  const set = new Set();
  for (let i = 0; i < chars.length; i++) {
    if (set.has(chars[i])) {
      return chars[i];
    }
    set.add(chars[i]);
  }
  return null;
}

console.log(firstRepatingCharacter("abcdebf")); // b
