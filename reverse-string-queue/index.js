// Write a function called 'reverseStringQueue' that takes in a string and return reverse of that string
// reverseStringQueue('hello'); // olleh

const Queue = require("../queue-implementation");

function reverseStringQueue(str) {
  const objQueue = new Queue();
  for (let i = str.length - 1; i >= 0; i--) {
    objQueue.enqueue(str[i]);
  }
  //  let reverseString = "";
  //   while (!objQueue.isEmpty()) {
  //     reverseString += objQueue.dequeue();
  //   }
  return objQueue.queue.join("");
}

console.log(reverseStringQueue("superman")); // namrepus
