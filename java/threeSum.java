class Solution {
  public List<List<Integer>> threeSum(int[] nums) {
    List<List<Integer>> result = new ArrayList();
    if (nums.length < 3) {
      return result;
    }
    Arrays.sort(nums);
    int index = 0;
    while (index < nums.length) {
      int l = index + 1;
      int r = nums.length - 1;
      int a = nums[index];
      if (index != 0 && nums[index - 1] == a) {
        index++;
        continue;
      }
      while (l < r) {
        int b = nums[l];
        if (l > index + 1 && nums[l - 1] == b) {
          l++;
          continue;
        }
        int c = nums[r];
        if (r < nums.length - 1 && nums[r + 1] == c) {
          r--;
          continue;
        }
        int sum = a + b + c;
        if (sum == 0) {
          List<Integer> li = new ArrayList();
          li.add(a);
          li.add(b);
          li.add(c);
          result.add(li);
          l++;
          r--;
        } else if (sum < 0) {
          l++;
        } else {
          r--;
        }
      }
      index++;
    }
    return result;

  }
}