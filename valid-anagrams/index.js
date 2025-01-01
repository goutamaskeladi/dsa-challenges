// Write a function called validAnagrams that takes in two strings and determines whether they are valid anagrams.
// validAnagrams('listen', 'silent') // true i.e both characters are matching
// validAnagrams('hello', 'world') // false i.e characters are not matching
// Split the strings into an array of characters, then reduce each array into an object of character frequencies for the strings
// Compare the frequencies

function validAnagrams(str1, str2) {
  const freqCount1 = str1.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  console.log(freqCount1);
  const freqCount2 = str2.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  console.log(freqCount2);
  return Object.keys(freqCount1).every(
    (char) => freqCount1[char] === freqCount2[char]
  );
}

console.log(validAnagrams("silent", "listen")); // true
