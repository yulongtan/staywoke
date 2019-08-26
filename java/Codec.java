/**
 * Write serialize & deserialize for a binary tree
 */

/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode(int x) { val = x; } }
 */
public class Codec {

  // Encodes a tree to a single string.
  // I used a level order traversal, and added hashtags for nulls
  public String serialize(TreeNode root) {
    if (root == null) {
      return "";
    }
    List<String> list = new ArrayList();
    Queue<TreeNode> q = new LinkedList();
    q.add(root);
    while (!q.isEmpty()) {
      int size = q.size();
      for (int i = 0; i < size; i++) {
        TreeNode n = q.remove();
        if (n == null) {
          list.add("#");
        } else {
          list.add(n.val + "");
          q.add(n.left);
          q.add(n.right);
        }
      }
    }
    return String.join(",", list);
  }

  // Decodes your encoded data to tree.
  public TreeNode deserialize(String data) {
    if (data.length() == 0) {
      return null;
    }
    String[] nodes = data.split(",");
    TreeNode root = new TreeNode(Integer.parseInt(nodes[0]));
    Queue<TreeNode> q = new LinkedList();
    q.add(root);
    int index = 1;
    while (!q.isEmpty()) {
      TreeNode node = q.remove();
      if (node != null) {
        TreeNode left = null;
        String val = nodes[index];
        if (!val.equals("#")) {
          left = new TreeNode(Integer.parseInt(val));
        }
        node.left = left;
        q.add(left);
        index++;

        TreeNode right = null;
        val = nodes[index];
        if (!val.equals("#")) {
          right = new TreeNode(Integer.parseInt(val));
        }
        node.right = right;
        q.add(right);
        index++;
      }
    }
    return root;
  }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));