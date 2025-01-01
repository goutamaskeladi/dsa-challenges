// Write a function called validatePassword that takes in a string and validate based on the following criteria
// Password must be 8 characters long, password must contain one uppercase letter, password must contain one lowercase letter,
// password must contain at least one digit. The function should return true if the password is valid and false otherwise.
// You can use split function to convert the string into an array of characters and use the some function to check if atleast
// one character meets a certain condition.

function validatePassword(password) {
  const isLengthValid = password.length >= 8;
  const hasUpperCase = password
    .split("")
    .some((char) => char === char.toUpperCase());
  const hasLowerCase = password
    .split("")
    .some((char) => char === char.toLowerCase());
  const hasDigit = /\d/g.test(password);
  return isLengthValid && hasUpperCase && hasLowerCase && hasDigit;
}

console.log(validatePassword("helloWorld2")); // false
