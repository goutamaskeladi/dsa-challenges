// write a function called countVowels that takes a string and returns number of vowels in the string
// countVowels('hello') // 2
// countVowels('why) // 0

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count = count + 1;
    }
  }
  return count;
}

console.log(countVowels("aeiou"));
