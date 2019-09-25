/**
 * Daily Coding Problem: Problem #36 [Medium]
 *
 * This problem was asked by Dropbox. Given the root to a binary search tree,
 * find the second largest node in the tree.
 *
 * LeetCode's similar question:
 * https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solution/.
 */

/**
 * The intuition here is to keep track of both the max and secondMax as we
 * iterate through the Tree. If we find something bigger than the max, then the
 * secondMax is the new max and the new max is the value. If something is
 * smaller than the max but bigger than the secondMax, we replace the secondMax.
 *
 * Runtime: O(n) Space: O(n)
 *
 * Alternate solution: Traverse the tree and add everything to a maxHeap. Remove
 * the first value and then return the top value (max).
 *
 * Runtime: O(n log (n)) (Heap add is O(n) * the loop of adding it in) Space:
 * O(2n) (Assuming we do this iteratively with the queue)
 */

const secondLargestNode = (root) => {
  if (!root) {
    return -1;
  }
  let max = -1;
  let secondMax = -1;
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      let val = node.value;
      if (val > max) {
        secondMax = max;
        max = val;
      }
      if (val < max && val > secondMax) {
        secondMax = val;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return secondMax;
}

module.exports = secondLargestNode;