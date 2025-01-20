// Write a function called breadthFirstTraversal that performs a Breadth First Traversal of a graph starting from
// a specified vertex and returns an array containing the vertices visited in the order they were traversed.
// Use the Queue class

const Graph = require("../graph-implementation");
const Queue = require("../queue-implementation");

const graph = new Graph();

// Example Graph
//  A --- B
//  |     |
//  |     |
//  C --- D
//  |     |
//  |     |
//  E --- F

// Create Node/Vertex
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
// Create relationship using links/edges
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

function breadthFirstTraversal(startingVertex) {
  const visited = new Set();
  const result = [];
  const queue = new Queue();
  queue.enqueue(startingVertex);
  visited.add(startingVertex);
  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();
    result.push(currentVertex);
    for (const neighbor of graph.adjacencyList[currentVertex]) {
      if (!visited.has(neighbor)) {
        queue.enqueue(neighbor);
        visited.add(neighbor);
      }
    }
  }
  return result;
}

console.log(breadthFirstTraversal("A")); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
