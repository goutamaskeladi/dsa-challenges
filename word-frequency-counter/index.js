// Write a function called wordFrequencyCounter that takes a string as input and returns a map that represents
// frequency of each words in the string.
// wordFrequencyCounter('The quick brown fox jumps over the lazy dog')
// Output: Map {'The': 2, 'quick": 1}

function wordFrequencyCounter(str) {
  const words = str.toLowerCase().split(/\W+/);
  const wordFrequency = new Map();
  for (const word of words) {
    if (word === "") continue;
    if (wordFrequency.has(word)) {
      let valueToChange = wordFrequency.get(word);
      valueToChange += 1;
      wordFrequency.set(word, valueToChange);
    } else {
      wordFrequency.set(word, 1);
    }
  }
  return wordFrequency;
}

console.log(
  wordFrequencyCounter("The quick brown fox jumps over the lazy dog")
);
