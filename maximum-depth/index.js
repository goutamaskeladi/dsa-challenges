// Write a function called maxDepth that takes root of binary tree as the input and returns maximum depth of the tree
// The binary tree is as follows
//    3
//   / \
//  9  20
//     / \
//    15  7
// The maximum depth is 3, which is the path 3 -> 20 -> 7.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(3);
const node9 = new Node(9);
const node20 = new Node(20);
const node15 = new Node(15);
const node7 = new Node(7);

root.left = node9;
root.right = node20;
node20.left = node15;
node20.right = node7;

function maxDepth(root) {
  if (!root) return [];
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
}

console.log(maxDepth(root)); // 3
