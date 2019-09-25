/**
 * This is the definition for a TreeNode, a representation of a Node in
 * a tree that has left and right children.
 */
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

module.exports = TreeNode;