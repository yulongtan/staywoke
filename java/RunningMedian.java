import java.util.PriorityQueue;

/**
 * Daily Coding Problem: Problem #33 [Easy]
 * 
 * This problem was asked by Microsoft.
 * 
 * Compute the running median of a sequence of numbers. That is, given a stream
 * of numbers print out the median of the list so far on each new element.
 * 
 * Recall that the median of an even-numbered list is the average of the two
 * middle numbers.
 * 
 * For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should
 * print out: (new line with no commas)
 * 
 * 2, 1.5, 2, 3.5, 2, 2, 2
 */

public class Solution {
  private PriorityQueue maxHeap = new PriorityQueue<Integer>();
  private PriorityQueue minHeap = new PriorityQueue<Integer>();

  /**
   * Runtime: O(n log (n)) - adding to the Heap is log(n).
   * Space: O(n)
   * @param nums
   */
  public void runningMedian(int[] nums) {
    for (int n : nums) {
      addNumber(n);
      double median = getMedian();
      System.out.println(median);
    }
  }

  /**
   * Add an element into minHeap first, and then remove the min
   * and move it into the max. This ensures that all elements
   * in the minHeap are larger than the maxHeap
   * @param n
   */
  private void addNumber(int n) {
    minHeap.add(n);
    maxHeap.add(minHeap.poll());
    if (minHeap.size() < maxHeap.size()) {
      minHeap.add(maxHeap.poll());
    }
  }

  private double getMedian() {
    if (minHeap.size() > maxHeap.size()) {
      return minHeap.peek();
    } else {
      int mid1 = minHeap.peek();
      int mid2 = maxHeap.peek();
      return (mid1 + mid2) / 2.0;
    }
  }
}