// We will implement binary search tree in JavaScript. We will start by creating a Node class, which will represent each node
// in the tree. Each node will have a value, a left property and a right property.
// Create a binary search tree
//        10
//       /  \
//      5   15
//     /
//    2

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  printTree() {
    const printNode = (node) => {
      if (node === null) {
        return;
      }
      printNode(node.left);
      console.log(node.value);
      printNode(node.right);
    };
    printNode(this.root);
  }
  lookUp(value) {
    let currentNode = this.root;
    if (!currentNode) {
      return null;
    }
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return null;
  }
  remove(value) {
    const removeNode = (node, value) => {
      if (node === null) return null;
      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
        return node;
      }
    };
    this.root = removeNode(this.root, value);
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
// console.log(bst.lookUp(2));
// console.log(bst.remove(5));
bst.remove(5);
bst.printTree();
