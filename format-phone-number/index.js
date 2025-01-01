// Write a function formatPhoneNumber returns a string representing a phone number
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // (123) 456 - 7890
// You can use Array.join method to concenate the numbers in the array.
// You can use Array.slice method to get subset of the array

function formatPhoneNumber(number) {
  const stringNumber = number.join("");
  const prefix = stringNumber.substring(0, 3);
  const middle = stringNumber.substring(3, 6);
  const last = stringNumber.substring(6);
  return `(${prefix}) ${middle} - ${last}`;
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456 - 7890
