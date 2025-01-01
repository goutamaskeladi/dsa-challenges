// Loop from 1 to 100 and print out each number. However if a number is divisible by 3, you print out 'Fizz' instead.
// If a number is divisible by 5, you print out 'Buzz' instead. If the number is divisible by both 3 and 5,
// you print out 'FizBuzz' instead.
// finzzBuzzArray(5) - [1, 2, 'Fizz', 4, 'Buzz']
// param - number - The number to loop and returns an array.
// Instead of console logging each number, you will need to push each number into an array

function finzzBuzzArray(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}

console.log(finzzBuzzArray(15));
