// Write a function called displayLikes that takes in an array of names and returns a string who likes the post.
// if no one likes it should return 'no one likes this'
// if one person likes it should return `{name} likes this`
// if two person likes it should return `{name1} and {name2} like this`

function displayLikes(arr) {
  const likeCount = arr.length;
  switch (likeCount) {
    case 0:
      return `No one like this`;
    case 1:
      return `${arr[0]} likes this`;
    case 2:
      return `${arr[0]}, ${arr[1]} like this`;
    default:
      return `${arr[0]}, ${arr[1]} and ${likeCount - 2} likes this`;
  }
}

console.log(displayLikes([])); // No one like this
