import java.util.Set;

// Apparently, this was a google question

/**
 * Given an array of numbers, return the longest streak that contains two unique
 * values E.g. [2, 3, 4, 4] would return 3 because the streak of 344 is the
 * longest.
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

  // This was asked by the daily coding question email. It's a slight modification
  // that is unique up to a given k
  // https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
  public int longestKUniqueStreak(int[] nums, int k) {
    if (nums.length < k) {
      return 0;
    }
    // Length is at least 2 at this point
    int count = 0;
    int uniques = 0;
    int max = 0;
    Set<Integer> s = new HashSet();
    for (int i = 0; i < nums.length; i++) {
      int n = nums[i];
      if (uniques <= k) {
        if (!s.contains(n)) {
          s.add(n);
          uniques++;
        }
        if (uniques > k) {
          i -= k;
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

  // Straight up the longest unique substring -- sliding window technique
  public int lengthOfLongestSubstring(String s) {
    if (s.length() < 2) {
      return s.length();
    }
    Set<Character> set = new HashSet();
    int max = 0;
    int start = 0;
    int end = 0;
    while (start < s.length() && end < s.length()) {
      char c = s.charAt(end);
      if (!set.contains(c)) {
        set.add(c);
        end++;
        max = Math.max(max, end - start);
      } else {
        set.remove(s.charAt(start));
        start++;
      }

    }
    return max;
  }
}