// Write a function called generateHashTag that takes string as input and returns a hashtag generated string according
// to the rules below.
// generateHashtag('JavaScript is awesome') // '#JavaScriptIsAwesome'
// generateHashtag('hello world') // '#HelloWorld'
// You can use the string manipulation method trim(), split() and join() to work with input string
// You can use the string method charAt() to get character at the specific index
// Use the string method to capitalize the first method of each word.

function generateHashTag(str) {
  if (str.trim() === "") {
    return false;
  }
  const words = str.trim().split(/\s+/);
  const capitalizedWords = words.map(
    (item) => item.charAt(0)?.toUpperCase() + item.slice(1)
  );
  const hashTag = "#" + capitalizedWords.join("");
  return hashTag;
}

console.log(generateHashTag("hello world"));
