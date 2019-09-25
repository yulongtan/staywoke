const TreeNode = require('./DataStructures/TreeNode');

/**
 * Decodes your encoded data to tree.
 *
 * @param {String} - String representation of a tree
 * @returns {TreeNode}
 */
const deserializeTree = (data) => {
  if (!data || !data.length) {
    return null;
  }
  data = data.split(',');
  let root = new TreeNode(data[0]);
  let queue = [];
  queue.push(root);
  let index = 1;
  while (queue.length) {
    let node = queue.shift();
    if (node) {
      let left = null;
      let val = data[index];
      if (val !== '#') {
        left = new TreeNode(val);
      }
      index++;
      node.left = left;
      queue.push(left);

      let right = null;
      val = data[index];
      if (val !== '#') {
        right = new TreeNode(val);
      }
      index++;
      node.right = right;
      queue.push(right);
    }
  }
  return root;
};

module.exports = deserializeTree;