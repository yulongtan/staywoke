// https://leetcode.com/problems/distribute-candies-to-people/

public class Solution {
  public int[] distributeCandies(int candies, int num_people) {
    if (num_people == 1) {
      int[] res = new int[1];
      res[0] = candies;
    }
    int[] res = new int[num_people];
    int loop = 0;
    for (int i = 1; candies > 0; i++) {
      int index = i % num_people;
      if (index == 0) {
        index = num_people;
      }
      int amountToGive = index + loop * num_people;

      if (index == num_people) {
        loop++;
      }

      if (amountToGive <= candies) {
        res[index - 1] = res[index - 1] + amountToGive;
        candies -= amountToGive;
      } else {
        res[index - 1] = res[index - 1] + candies;
        candies = 0;
      }
    }
    return res;
  }
}