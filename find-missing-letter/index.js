// Return a missing letter in an array
// findMissingLetter(['a' ,'b', 'd', 'e', 'f']) // c

function findMissingLetter(arr) {
  const expected = "abcdef";
  const result = [];
  const expectedArray = expected.split("");
  for (let i = 0; i < expectedArray.length; i++) {
    if (!arr.includes(expectedArray[i])) {
      result.push(expectedArray[i]);
    }
  }
  return result;
}

console.log(findMissingLetter(["a", "b", "e", "f"])); // [ 'c', 'd' ]
