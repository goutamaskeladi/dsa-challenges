// Write a function called validateEmail that takes a string and returns whether string is a valid email address.
// validateEmail(email: string): boolean
// validateEmail('john@gmail.com') // true | validateEmail('john@yahoo') // false

function validateEmail(email) {
  const emailId = email.split("");
  if (emailId.includes("@") && emailId.includes(".")) {
    return true;
  }
  return false;
}

console.log(validateEmail("john@yahoo")); // false
