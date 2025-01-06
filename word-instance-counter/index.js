// Write a function called wordInstanceCounter that takes a string and a word as input and returns the number of instances
// of that word in the string
// wordInstanceCounter('The quick brown fox jumps over the lazy dog', 'the') // 2

const HashTable = require("../custom-hash-table");

function wordInstanceCounter(str, word) {
  const words = str.toLowerCase().split(/\W+/);
  const wordFrequency = new HashTable();
  const targetWord = word.toLowerCase();
  let count = 0;
  for (const currentWord of words) {
    if (currentWord === "") continue;
    if (wordFrequency.has(currentWord)) {
      wordFrequency.set(currentWord, wordFrequency.get(currentWord) + 1);
    } else {
      wordFrequency.set(currentWord, 1);
    }
    // Now check if current word is target word
    if (currentWord === targetWord) {
      count = count + 1;
    }
  }
  return count;
}

console.log(
  wordInstanceCounter("The quick brown fox jumps over the lazy dog", "the") // 2
);
