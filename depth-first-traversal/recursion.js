class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
b.right = e;
b.left = d;
a.right = c;
c.left = f;

function binaryRecursion(root) {
  // result array which we are going to return
  const result = [];
  function traverse(node) {
    if (node !== null) {
      result.push(node.data);
      traverse(node.left);
      traverse(node.right);
    }
  }
  traverse(root);
  return result; // [ 'a', 'b', 'd', 'e', 'c', 'f' ]
  //   if (root.length === 0) return [];
  //   let result = [];
  //   let stack = [];
  //   stack.push(root);
  //   while (stack.length > 0) {
  //     let current = stack.pop();
  //     result.push(current.data);
  //     if (current.right) {
  //       stack.push(current.right);
  //     }
  //     if (current.left) {
  //       stack.push(current.left);
  //     }
  //   }
  //   return result;
}

console.log(binaryRecursion(a)); // [ 'a', 'b', 'd', 'e', 'c', 'f' ]
