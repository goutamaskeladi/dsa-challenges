// Stack Implementation

class Stack {
  constructor() {
    this.maxSize = 100;
    this.stack = []; // place to store stack
    this.top = -1; // when you add an item to the stack it will start with you have index of 0. We are adding -1 for empty
    // if you have one item that will be 0, next is 1, 2 etc...
  }
  push(value) {
    // Check if stack is full because maxSize = 100
    if (this.isFull()) {
      return false;
    }
    // we are adding one to the stack
    this.top++;
    // now add to the underlying array
    this.stack[this.top] = value;
    return true;
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    // // Get the last item
    // const valueToReturn = this.stack[this.top];
    // // Change the index
    // this.top--;
    // // Return the last index item
    // return valueToReturn;
    this.top--;
    return this.stack.pop();
  }
  // Get the top value
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.top];
  }
  isEmpty() {
    return this.top === -1;
  }
  isFull() {
    return this.top === this.maxSize - 1;
  }
}

module.exports = Stack;

// const stack = new Stack();
// stack.push(100);
// stack.push(200);
// stack.push(300);
// stack.push(400);
// stack.push(500);
// stack.pop();
// console.log(stack.peek());
// console.log(stack);
