// https://leetcode.com/problems/validate-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = (root) => {
  if (!root) {
    return true;
  }
  let val = root.val;
  return help(root.left, Number.NEGATIVE_INFINITY, val) && help(root.right, val, Number.POSITIVE_INFINITY);
};

const help = (root, min, max) => {
  if (!root) {
    return true;
  }
  let val = root.val;
  if (val <= min || val >= max) {
    return false;
  }
  return help(root.left, min, val) && help(root.right, val, max);
}