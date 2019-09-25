/**
 * Serializes a binary tree to a string [Hard] 
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 * 
 * @param {TreeNode} root - root of the tree
 * @returns {String} a string representation of a Tree
 */
const serializeTree = (root) => {
  if (!root) {
    return '';
  }
  let queue = [];
  let list = [];
  queue.push(root);
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (!node) {
        list.push('#');
      } else {
        list.push(node.value);
        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }
  return list.join(',');
}

module.exports = serializeTree;