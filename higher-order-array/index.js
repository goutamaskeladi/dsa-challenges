const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((item) => item * 2);

console.log("map", doubled); // [ 2, 4, 6, 8, 10 ]

const evenNumber = numbers.filter((item) => item % 2 === 0);

console.log("filter", evenNumber); // [ 2, 4 ]

const sumNumber = numbers.reduce((sum, num) => sum + num, 0);

console.log("reduce", sumNumber); // 15

numbers.forEach((element) => {
  console.log(element * 2);
});

const foundNumber = numbers.find((num) => num > 3);

console.log("find", foundNumber);

console.log(numbers.some((num) => num % 2)); // true

console.log(numbers.every((item) => typeof item === "number")); // true
