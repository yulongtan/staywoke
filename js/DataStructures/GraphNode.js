/**
 * This is the definition for a GraphNode.
 */
class GraphNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

module.exports = GraphNode;