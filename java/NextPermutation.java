/**
 * https://leetcode.com/problems/next-permutation/
 * 
 * This was one of my follow-ups with Amazon Fuse
 */

class Solution {
  public void nextPermutation(int[] nums) {
    if (nums.length > 1) {
      int swapIndex = -1;
      for (int i = nums.length - 1; i > 0; i--) {
        if (nums[i - 1] < nums[i]) {
          swapIndex = i - 1;
          break;
        }
      }

      // Array is in desecnding order, so it's already the highest
      if (swapIndex == -1) {
        reverse(nums, 0, nums.length);
        return;
      }

      int smallestSubArrayIndex = -1;
      int min = Integer.MAX_VALUE;
      for (int i = swapIndex + 1; i < nums.length; i++) {
        int current = nums[i];
        if (current <= min && current > nums[swapIndex]) {
          min = current;
          smallestSubArrayIndex = i;
        }
      }
      int temp = nums[swapIndex];
      nums[swapIndex] = nums[smallestSubArrayIndex];
      nums[smallestSubArrayIndex] = temp;
      reverse(nums, swapIndex + 1, nums.length);
    }
  }

  private void reverse(int[] nums, int start, int end) {
    if (nums.length > 1) {
      int lo = start;
      int hi = end - 1;
      while (lo < hi) {
        int temp = nums[lo];
        nums[lo] = nums[hi];
        nums[hi] = temp;
        lo++;
        hi--;
      }
    }
  }
}