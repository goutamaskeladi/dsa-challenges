class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  printAdjacencyList() {
    for (const vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join(" ")}`);
    }
  }
}

// const g = new Graph();
// g.addVertex("Tokyo");
// g.addVertex("Dallas");
// g.addVertex("Aspen");

// g.addEdge("Tokyo", "Dallas");
// g.addEdge("Dallas", "Aspen");
// g.addEdge("Aspen", "Tokyo");

// g.printAdjacencyList();

// g.removeEdge("Dallas", "Aspen");
// g.printAdjacencyList();

// g.removeVertex("Aspen");

// g.printAdjacencyList();

/*
Tokyo -> Dallas Aspen
Dallas -> Tokyo Aspen
Aspen -> Dallas Tokyo
*/

/*
Tokyo -> Dallas Aspen
Dallas -> Tokyo
Aspen -> Tokyo
*/

/*
Tokyo -> Dallas
Dallas -> Tokyo
*/

// Create a cyclic graph:
//     Tokyo
//    /     \
//  Dallas - Aspen

// Example Adjacency List
// {
//   'A': ['B', 'C'],
//   'B': ['A', 'D'],
//   'C': ['A', 'D'],
//   'D': ['B', 'C']
// };

module.exports = Graph;
