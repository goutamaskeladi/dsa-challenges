// Doubly Linked List Node

class Node {
  constructor(val) {
    // to store the value
    this.data = val;
    // to link to the next node
    this.next = null;
    // to link to the previous node
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // to contain the first item of the list
    this.head = null;
    // to contain the last item of the list
    this.tail = null;
  }
  // to check if the list is empty
  isEmpty() {
    if (this.head === null) return true;
    return false;
  }
  // add item at the last of doubly linked list
  addItem(val) {
    // Create a new node
    let temp = new Node(val);
    // If the list is empty assign new node to both head and tail
    if (this.head === null) {
      this.head = temp;
      this.tail = temp;
    } else {
      // add item to the tail and shift the tail
      // just think about object reference. Second time when we try to add, head and tail are same objects.
      this.tail.next = temp;
      this.tail = this.tail.next;
    }
  }
  // traverse and display the list
  display() {
    // check if the list is empty
    if (!this.isEmpty()) {
      // traverse the list using new current pointer
      let curr = this.head;
      while (curr !== null) {
        // display the data
        console.log(curr.data);
        // shift the pointr
        curr = curr.next;
      }
    }
  }
}

const dll = new DoublyLinkedList();
dll.addItem(10);
dll.addItem(20);
dll.addItem(30);
dll.addItem(40);
dll.display();
