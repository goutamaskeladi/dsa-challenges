// write a function areAllCharactersUnique that takes a string and returns true or false \
// depending on whether all characters are unique i.e no character is repeated
// areAllCharactersUnique('abcdefg') // true
// areAllCharactersUnique('hello') // false

function areAllCharactersUnique(str) {
  //   const charCount = {
  //     a: true,
  //     b: true,
  //     c: true,
  //     c: false,
  //   };
  const charCount = new Set();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount.has(char)) {
      return true;
    }
    charCount.add(char);
  }
  return false;
}

console.log(areAllCharactersUnique("phillips")); // false
