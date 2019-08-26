import java.util.Set;

// Apparently, this was a google question

/**
 * Given an array of numbers, return the longest streak that contains two unique values
 * E.g. [2, 3, 4, 4] would return 3 because the streak of 344 is the longest.
 */

public class Solution {
  public int longestUniqueStreak(int[] nums) {
    if (nums.length < 2) {
      return 0;
    }
    // Length is at least 2 at this point
    int count = 0;
    int uniques = 0;
    int max = 0;
    Set<Integer> s = new HashSet();
    for (int i = 0; i < nums.length; i++) {
      int n = nums[i];
      if (uniques <= 2) {
        if (!s.contains(n)) {
          s.add(n);
          uniques++;
        }
        if (uniques > 2) {
          i -= 2;
          s.clear();
          uniques = 0;
          count = 0;
        } else {
          count++;
        }
        max = Math.max(max, count);
      }
    }
    return max;
  }
}