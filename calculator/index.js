// The function must return a number
// The function must throw or log an error if an invalid operation given
// You can use if statements or switch statements to determine which operator was given
// calculator(1, 2, '+') - 3

function calculator(x, y, ops) {
  switch (ops) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
    default:
      throw new Error("Invalid Opeator");
  }
}

try {
  console.log(calculator(100, 100, "+"));
} catch (e) {
  console.log(e.message);
}

try {
  console.log(calculator(100, 100, "="));
} catch (e) {
  console.log(e.message);
}
