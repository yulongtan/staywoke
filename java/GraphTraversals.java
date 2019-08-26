import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Set;

public class Node {
    public List<Node> children;
    public String val;

    public Node(int val) {
        this.val = val;
        this.children = new LinkedList();;
    }
}

public class Solution {

    public static void main(String[] args) {
        Node i = new Node("i");
        Node g = new Node("g");
        Node h = new Node("h");
        Node f = new Node("f");
        Node d = new Node("d");
        Node e = new Node("e");
        Node a = new Node("a");
        Node b = new Node("b");
        Node c = new Node("c");

        i.children.add(g);
        i.children.add(h);

        g.children.add(i);
        g.children.add(h);
        g.children.add(f);

        h.children.add(i);
        h.children.add(g);
        h.children.add(e);

        f.children.add(g);
        f.children.add(d);

        d.children.add(f);
        d.children.add(e);
        d.children.add(a);

        e.children.add(h);
        e.children.add(d);
        e.children.add(c);
        e.children.add(b);

        a.children.add(d);
        a.children.add(b);

        b.children.add(e);
        b.children.add(c);

        c.children.add(e);
        c.children.add(b);

        List<Node> list = breadthFirstSearch(i);
        System.out.println(print(list));
    }

    /**
     * Traverses through a Graph with BFS and returns the nodes in a list
     * @param start - starting node
     * @return - list
     */
    public static List<Node> breadthFirstSearch(Node start) {
        if (start == null) {
            return new LinkedList();
        }
        Set<Node> visited = new HashSet<>();
        Queue<Node> q = new LinkedList<>();
        List<Node> result = new LinkedList<>();
        q.add(start);
        while (!q.isEmpty()) {
            Node n = q.remove();
            visited.add(n);
            result.add(n);
            for (Node child : n.children) {
                if (!visited.contains(child)) {
                    q.add(child);
                }
            }
        }
        return result;
    }

    public static List<Node> depthFirstSearch(Node start) {
        if (start == null) {
            return new LinkedList();
        }
        Set<Node> visited = new HashSet();
        List<Node> result = new LinkedList();
        Stack<Node> s = new Stack();
        s.push(start);
        while (!s.isEmpty()) {
            Node n = s.pop();
            visited.add(n);
            result.add(n);
            for (Node child : n.children) {
                if (!visited.contains(child)) {
                    s.push(child);
                }
            }
        }
        return result;
    }

    public static List<Node> depthFirstSearchRecursion(Node start) {
        Set<Node> visited = new HashSet();
        List<Node> result = new LinkedList();
        return dfs(start, visited, result);
    }

    private static List<Node> dfs(Node node, Set<Node> visited, List<Node> result) {
        if (start == null) {
            return new LinkedList();
        }
        visited.add(node);
        result.add(node);
        for (Node child : n.children) {
            if (!visited.contains(child)) {
                dfs(child, visited, result);
            }
        }
    }

    public static String print(List<Node> list) {
        if (list.size() == 0) {
            return "";
        }

        if (list.size() == 1) {
            return "[" + list.get(0).val + "]";
        }

        String res = "[";
        for (int i = 1; i < list.size(); i++) {
            res += list.get(i).val + " ";
        }
        return res + "]";
    }
}