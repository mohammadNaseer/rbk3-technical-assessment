var Graph = require('./Graph.js');

var NamedGraph = function (adjacencyListPath, name) {
	Graph.call(this);
};

NamedGraph.prototype = Object.create(Graph.prototype);
NamedGraph.prototype.constructor = NamedGraph;



module.exports = NamedGraph;

