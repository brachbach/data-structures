

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.data = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.data[node] = {}; 
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.data.hasOwnProperty(node);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  var removeEd = function (edge, edgeKey) {
    this.removeEdge(edgeKey, node);
  }.bind(this);

  _.each(this.data[node], removeEd);

  delete this.data[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var bool = this.data[fromNode].hasOwnProperty(toNode);
  return bool;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.data[fromNode][toNode] = true;
  this.data[toNode][fromNode] = true;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.data[fromNode][toNode];
  delete this.data[toNode][fromNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.data, function (node, key) {
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


