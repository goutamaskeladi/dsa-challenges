// Create a function called anagramGrouping to use the HashTable class that we are created.
// anagramGrouping(['listen', 'silent', 'hello', 'act', 'world', 'cat'])
// Output [['listen', 'silent'], ['act', cat'], ['hello'], ['world']]

const HashTable = require("../custom-hash-table");

function anagramGrouping(arr) {
  // anagram group map
  const angramMap = new HashTable();
  for (let item of arr) {
    const uniqueKey = item.split("").sort().join("");
    if (angramMap.has(uniqueKey)) {
      angramMap.get(uniqueKey).push(item);
    } else {
      angramMap.set(uniqueKey, [item]);
    }
  }
  return angramMap.getValues();
}

console.log(
  anagramGrouping(["listen", "silent", "hello", "act", "world", "cat"])
);

// [ [ 'hello' ], [ 'act', 'cat' ], [ 'world' ], [ 'listen', 'silent' ] ]

/*
  act: ["act", "cat"]
  eilnst: ["listen", "silent"]
  ehllo: ["hello"]
  dlorw: ["world"]
*/
