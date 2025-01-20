// Write a function called depthFirstTraversal that perform depth first traversal of a graph from a specified vertex and
// return an array containing the vertices visited in the order they were traversed.
// With the tree, we started at root and with graph we can start at any vertex.
// Add each unvisited vertex to a stack and pop off and add to a result array.
// Use a loop to iterate the adjacencyList and check if there are any unvisited neighbors.
// We are going to use Object for visited

const Graph = require("../graph-implementation");
const Stack = require("../stack-implementation");

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

function depthFirstTraversal(graph, startingVertex) {
  if (!graph.adjacencyList[startingVertex]) {
    return [];
  }
  const visited = {};
  const stack = new Stack();
  const result = [];
  stack.push(startingVertex);
  visited[startingVertex] = true;

  while (!stack.isEmpty()) {
    const currentVertex = stack.pop();
    result.push(currentVertex);
    // now check neighbors of current vertex
    graph.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    });
  }
  return result;
}

const result = depthFirstTraversal(graph, "A");

console.log(result); // [ 'A', 'C', 'E', 'F', 'D', 'B' ]
