

// Instantiate a new graph
var Graph = function() {
  // returns object

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // sets key of the value of the node to an empty array
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // check if graph has value for node using .hasOwnProperty()
  // returns boolean
  return this.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // iterate through graph[key] to remove connections
  // remove key from graph
  // perhaps returns value of node removed?
  const connections = this[node];

  for (let i = 0; i < connections.length; i++) {
    const currNode = connections[i];

    this[currNode] = this[currNode].splice(node, 1);
  }

  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // return result (boolean) of graph[fromNode] contains toNode
  return this[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // push fromNode to G[toNode]
  // push toNode to G[fromNode]
  this[toNode].push(fromNode);
  this[fromNode].push(toNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // check G[fromNode] contains toNode
  //  if yes, splice toNode out of G[fromNode]
  //  splice fromNode out of G[toNode]
  if (this[fromNode].includes(toNode)) {
    this[fromNode] = this[fromNode].splice(toNode, 1);
    this[toNode] = this[toNode].splice(fromNode, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate through graph
  // call cb on each key
  const objKeys = Object.keys(this);
  for (let i = 0; i < objKeys.length; i++) {
    // cb(objKeys[i]);
    cb.call(this, objKeys[i]);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 Graph.addNode(): O(1)
 Graph.contains(): O(1)
 Graph.removeNode(): O(m**2) // m refers to the number of connections within Graph
 Graph.addEdge(): O(1)
 Graph.hasEdge(): O(m)
 Graph.removeEdge(): O(m)
 Graph.forEachNode(): O(n)
 */

