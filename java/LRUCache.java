// https://leetcode.com/problems/lru-cache/

import java.util.*;

public class LRUCache {
  private int capacity;
  private Map<Integer, Node> cache;
  private Node head;
  private Node tail;
  private int size;

  public LRUCache(int capacity) {
    this.capacity = capacity;
    this.cache = new HashMap();
    this.head = new Node();
    this.tail = new Node();
    this.size = 0;

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  public class Node {
    private int key;
    private int val;
    Node next;
    Node prev;

    public Node() {
      this(-1, -1);
    }

    public Node(int key, int val) {
      this.key = key;
      this.val = val;
    }
  }

  private void addNode(Node node) {
    Node next = this.head.next;
    this.head.next = node;
    node.next = next;
    node.prev = this.head;
    next.prev = node;

    this.cache.put(node.key, node);
    this.size++;
  }

  private void removeNode(Node node) {
    Node next = node.next;
    Node prev = node.prev;
    node.next.prev = prev;
    node.prev.next = next;

    this.cache.remove(node.key);
    this.size--;
  }

  public int get(int key) {
    if (!this.cache.containsKey(key)) {
      return -1;
    }
    Node node = this.cache.get(key);
    removeNode(node);
    addNode(node);
    return node.val;
  }

  public void put(int key, int value) {
    Node node = this.cache.get(key);
    if (node != null) {
      removeNode(node);
      node.val = value;
      addNode(node);
    } else {
      node = new Node(key, value);
      if (this.cache.size() < this.capacity) {
        addNode(node);
      } else if (this.cache.size() == this.capacity) {
        removeNode(this.tail.prev);
        addNode(node);
      }
    }
  }
}