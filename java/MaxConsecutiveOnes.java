// Our solution
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int globalMax = 0;
        int localMax = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 1) {
                localMax++;
            } else {
                localMax = 0;
            }
            if (globalMax < localMax) {
                globalMax = localMax;
            }
        }
        return globalMax;
    }
}

// Google asked for this version using right and left indices
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int res = 0;
        int l = 0;
        int r = 0;
        while (r < nums.length) {
            if (nums[r] == 1) {
                l = r;
                while (r < nums.length && nums[r] == 1) {
                    r++;
                }
                res = Math.max(res, r - l);
            } else {
                r++;
            }
        }
        return res;
    }
}