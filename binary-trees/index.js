// We will create a TreeNode class that will allow us to create a binary tree in JavaScript.
// Create a class called TreeNode. This will represent a node in the tree. It will have a value property and left, right
// property that will point to left and right child nodes respectively. They will be initialized to null when the node is created
// Later we will create BinaryTree class that will allow us to create a binary tree by passing in values.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {}
}

const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");
const f = new TreeNode("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(a);
