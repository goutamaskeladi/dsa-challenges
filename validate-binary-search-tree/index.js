// Write a function called isValidBST that takes in the following parameter
// root - The root/current node of a binary tree
// The function should return boolean indicating the tree is valid BST.
// You want to check ALL subtrees, not just right and left of the root node
// Create a helper function to call recursively that takes in a min and max value.
// Make sure anything on the left of the node is less than max(parent node)
// anything on the right side is more than min (parent node).
// Same node - left - max(parent) and right - min(parent)

//          8
//         / \
//        6   10
//       / \   \
//      4   7   12

// Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BST Class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        }
        if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  isValidBST() {
    function isValidSubtree(node, min, max) {
      // base case
      if (!node) return true;
      if (
        (min !== null && node.value <= min) ||
        (max !== null && node.value >= max)
      ) {
        return false;
      }
      return (
        isValidSubtree(node.left, min, node.value) &&
        isValidSubtree(node.right, node.value, max)
      );
    }
    return isValidSubtree(this.root, null, null);
  }
  viewAll() {
    let current = this.root;
    function printRecursive(node) {
      console.log(node.value);
      if (node.left !== null) {
        printRecursive(node.left);
      }
      if (node.right !== null) {
        printRecursive(node.right);
      }
    }
    printRecursive(current);
  }
}

const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(6);
bst.insert(4);
bst.insert(7);
bst.insert(10);
bst.insert(12);

console.log(bst.isValidBST()); // true
