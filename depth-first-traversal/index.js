class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const root = new Node("a");
const nodeB = new Node("b");
const nodeC = new Node("c");
const nodeD = new Node("d");
const nodeE = new Node("e");
const nodeF = new Node("f");

root.left = nodeB;
root.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = nodeF;

// Now need to pass root node into traversal method and get back an array
// expect(depthFirstTraversal(root).toEqual(['a', 'b', 'd', 'e', 'c', 'f']));

function depthFirstTraversal(root) {
  if (!root) {
    return [];
  }
  const result = [];
  const stack = []; // we can use javascript built-in methods push/pop or Stack Class
  stack.push(root); // root pushed into stack array
  while (stack.length > 0) {
    // get out data from stack until it reaches zero
    const current = stack.pop(); // we go through each node and get the data
    result.push(current.data); // just push only data into the result i.e first root data
    if (current.right) {
      stack.push(current.right); // recursively pushing to stack and finding data
    }
    if (current.left) {
      stack.push(current.left); // similar on left side.
    }
  }
  return result;
}

const result = depthFirstTraversal(root);
console.log(result); // [ 'a', 'b', 'd', 'e', 'c', 'f' ]
