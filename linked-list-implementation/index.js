class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  // Append: Insert a node at the end of the linked list
  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  // Prepend: Insert a node begining of the linked list
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  // Find the first occurence of the node
  search(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  // Remove the first occurance
  delete(data) {
    if (this.head === null) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }
  // Display the elements of the linked list
  print() {
    let current = this.head;
    const elements = [];
    while (current !== null) {
      elements.push(current.data);
      current = current.next;
    }
    console.log(elements);
  }
  // Find middle
  findMiddle() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      // make sure fast reaches end
      fast = fast.next.next; // fast is set to twice speed.
      slow = slow.next; // slow is set to one by one.
    }
    return slow.data; // which is going to give middle
  }
}

module.exports = LinkedList;

// const myObj = new LinkedList();
// myObj.append(100);
// myObj.append(200);
// myObj.prepend(50);
// myObj.delete(100);
// console.log(myObj.search(500));
// myObj.print();
