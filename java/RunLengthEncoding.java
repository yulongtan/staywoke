import java.util.Map;

/**
 * Daily Coding Problem: Problem #29 [Easy]
 * 
 * This problem was asked by Amazon. Run-length encoding is a fast and simple
 * method of encoding strings. The basic idea is to represent repeated
 * successive characters as a single count and character. For example, the
 * string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
 * 
 * Implement run-length encoding and decoding. You can assume the string to be
 * encoded have no digits and consists solely of alphabetic characters. You can
 * assume the string to be decoded is valid.
 */

public class Solution {
  public String runLengthEncoding(String s) {
    if (s == null || s.length() == 0) {
      return "";
    }
    Map<Character, Integer> map = new HashMap();
    String result = "";
    char currentChar = s.charAt(0);
    for (int i = 0; i < s.length(); i++) {
      char c = s.charAt(i);
      if (!map.containsKey(c)) {
        map.put(c, 1);
      } else {
        map.put(c, map.get(c) + 1);
      }
      if (c != currentChar) {
        int count = map.get(currentChar);
        result += (count + "") + currentChar;
        map.remove(currentChar);
        currentChar = c;
      }
      // Check for last letter
      if (i == s.length() - 1) {
        result += (map.get(c) + "") + c;
      }
    }
    return result;
  }
}