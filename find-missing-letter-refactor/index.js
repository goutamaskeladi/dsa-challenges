// findMissingLetter(['a', 'b', 'c', 'd', 'f']) // 'e'
// Use only high order array methods. No for loops allowed

function findMissingLetter(arr) {
  const missingCharCode = arr.filter((char, index) => {
    if (index === 0) return false; // first index cannot be taken as missing
    const prevCharCode = arr[index - 1].charCodeAt(0);
    console.log("prev", prevCharCode);
    const currentCharCode = char.charCodeAt(0);
    console.log("curr", currentCharCode);
    console.log("char", char);
    return currentCharCode - prevCharCode > 1; // filter method check for condition here it return true for current char
  });
  return String.fromCharCode(missingCharCode[0].charCodeAt(0) - 1);
}

console.log(findMissingLetter(["a", "c", "d"])); // b
