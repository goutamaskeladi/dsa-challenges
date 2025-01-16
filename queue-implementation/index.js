class Queue {
  constructor() {
    // Queue data
    this.queue = [];
    // Item in the front is the head
    this.head = 0;
    // Last item is the tail
    this.tail = 0;
    this.maxSize = 100; // optional
  }
  enqueue(item) {
    // we need to add it to the tail
    if (this.isFull()) {
      return false;
    }
    this.queue[this.tail] = item;
    this.tail++;
    return true;
  }
  dequeue() {
    const item = this.queue[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.queue[this.head];
  }
  getLength() {
    return this.tail - this.head;
  }
  isEmpty() {
    return this.getLength === 0;
  }
  isFull() {
    return this.getLength() === this.maxSize;
  }
}

module.exports = Queue;

// const queue = new Queue();
// queue.enqueue("hello");
// queue.enqueue("world");
// queue.enqueue("test");
// queue.dequeue();
// console.log(queue.peek());
// console.log(queue);
