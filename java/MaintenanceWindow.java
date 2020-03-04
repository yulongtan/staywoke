/**
 * This was the coding challenge (phone screening) for Outreach (03-02-20)
 * 
 * Problem Statement
 * 
 * This problem concerns finding a time when we can do daily recurring 
 * maintenance on a server. You are to write a function that is given the following
 * information:
 * 
 * List of times when the server is busy everyday
 * Duration in minutes of the maintenance window
 * 
 * The function should return the start time of a daily maintenance 
 * window when the server is not busy.
 * 
 * In pseudo-code, the function signature would look something like this:
 * 
 *  maint_window_start(busy_times, duration_mins) -> start_time
 * 
 * Busy time input:
 * 
 * The "busy times" should be a list of time ranges like the 
 * following expressed past midnight:
 * 
 * 5 to 30 (00:05 to 00:30)
 * 120 to 241 (02:00 to 04:01)
 * 790 to 1015 (13:10 to 16:55)
 */

public class Solution {
  public int doMaint(List<int[]> list, int duration) {
    int whereItStarts = list.get(0)[0];
    if (duration < whereItStarts) {
      return 0;
    }
    int l = 0;
    int r = 1;
    while (r < list.size()) {
      int[] w1 = list.get(l);
      int[] w2 = list.get(r);

      int free = w2[0] - w1[1];
      if (duration < free) {
        return w1[1] + 1;
      }
      l++;
      r++;
    }
    int[] lastInterval = list.get(list.size() - 1);
    int remainderOfDay = 1440 - lastInterval[1];
    int totalRemaining = remainderOfDay + whereItStarts;
    if (duration > totalRemaining) {
      return -1;
    }
    return list.get(list.size() - 1)[1] + 1;
  }
}