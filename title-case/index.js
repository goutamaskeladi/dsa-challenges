// write a function called titleCase that takes in a string with the first letter of each word capitalized
// titleCase('short and sound') - Short And Sound

function titleCase(str) {
  let stringArry = str?.split(" ");
  for (let i = 0; i < stringArry.length; i++) {
    stringArry[i] =
      stringArry[i]?.charAt(0)?.toUpperCase() + stringArry[i]?.slice(1);
  }
  return stringArry?.join(" ");
}

console.log(titleCase("short and sound")); // Short And Sound
