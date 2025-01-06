// Anagrams are words or phrases formed by rearranging the letters of another word or phrase. For example,
// cinema is an anagram of iceman.
// Write a function called anagramGrouping that takes an array of strings as input and returns an array of arrays, where
// each sub-array contains words that are anagrams of each other.
// anagramGrouping(['cat', 'act', 'dog', 'god', 'tac'])
// Output: [['cat', 'act', 'tac'], ['dog', 'god']]

function anagramGrouping(words) {
  const angramGroups = new Map();
  for (const word of words) {
    const sortedChars = word.split("").sort().join(""); // here sorted char act as a 'Key'
    if (angramGroups.has(sortedChars)) {
      const getEx = angramGroups.get(sortedChars);
      getEx.push(word);
    } else {
      angramGroups.set(sortedChars, [word]);
    }
  }
  return angramGroups;
}

console.log(anagramGrouping(["cat", "act", "dog", "god", "tac"]));
// Map(2) { 'act' => [ 'cat', 'act', 'tac' ], 'dgo' => [ 'dog', 'god' ] }
