/**
 * Daily Coding Problem: Problem #36 [Medium]
 * 
 * This problem was asked by Dropbox. Given the root to a binary search tree,
 * find the second largest node in the tree.
 * 
 * LeetCode's similar question:
 * https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solution/
 */

public class Solution {

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
  public int secondLargestNode(TreeNode root) {
    if (root == null) {
      return -1;
    }
    Queue<TreeNode> q = new LinkedList();
    int max = -1;
    int secondMax = -1;
    q.add(root);
    while (!q.isEmpty()) {
      int size = q.size();
      for (int i = 0; i < size; i++) {
        TreeNode current = q.remove();
        int val = current.val;
        if (val > max) {
          secondMax = max;
          max = val;
        }
        if (val < max && val > secondMax) {
          secondMax = val;
        }
        if (current.left != null)
          q.add(current.left);
        if (current.right != null)
          q.add(current.right);
      }
    }
    return secondMax;
  }
}