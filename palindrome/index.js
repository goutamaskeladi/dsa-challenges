// A palindrome is a word, phrase, number, or other sequence of characters which the same backward or farward.
// An example of a palindrome is 'madam'
// Write a function isPalindrome that takes in a string and returns true if string is palindrome and false if its not.
// isPalindrome('madam') - true

function isPalindrome(str) {
  let originalString = str?.toString();
  let reverseString = str?.toString()?.split("")?.reverse()?.join(""); // Put empty string for each char separation or join
  if (originalString === reverseString) {
    return true;
  }
  return false;
}

console.log(isPalindrome(101)); // true
