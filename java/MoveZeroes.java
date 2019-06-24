class Solution {
    public void moveZeroes(int[] nums) {
        int start = 0;
        int end = nums.length - 1;
        while (start <= end) {
            if (nums[start] == 0) {
                // shift everything to the left
                if (nums.length > 1) {
                    for (int i = start; i < nums.length - 1; i++) {
                        nums[i] = nums[i + 1];
                    }
                }
                // set nums[end] to 0
                nums[end] = 0;
                // if nums[start] != 0, increment it
                
                end--;
            }
            if (nums[start] != 0) {
                start++;
            }
        }
    }
}