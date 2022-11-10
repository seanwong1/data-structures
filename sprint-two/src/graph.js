// Instantiate a new graph
var Graph = function() {
  this.parent = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.parent[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.parent[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.parent[node].length > 0) {
    for (var i = 0; i < this.parent[node].length; i++) {
      this.removeEdge(node, this.parent[node][i]);
    }
  }
  delete this.parent[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.parent[fromNode].length; i++) {
    if (this.parent[fromNode][i] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.parent[fromNode].push(toNode);
  this.parent[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.parent[fromNode].length; i++) {
    if (this.parent[fromNode][i] === toNode) {
      this.parent[fromNode].splice(i, 1);
    }
  }
  for (var i = 0; i < this.parent[toNode].length; i++) {
    if (this.parent[toNode][i] === fromNode) {
      this.parent[toNode].splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //for (node in this.parent) {
  //  cb(node);
  //}
  _.each(this.parent, function(value, key) { cb(key); });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */