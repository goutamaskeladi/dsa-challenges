// Write a function to reverse the string using linked list

const LinkedList = require("../linked-list-implementation");

function reverseStringLinkedList(str) {
  const linkedNode = new LinkedList();
  // Put data in reverse order
  for (let i = str.length - 1; i >= 0; i--) {
    linkedNode.append(str[i]);
  }
  let reverseString = "";
  let current = linkedNode.head;
  while (current !== null) {
    reverseString += current.data;
    current = current.next;
  }
  return reverseString;
}

console.log(reverseStringLinkedList("helloworld")); // dlrowolleh
