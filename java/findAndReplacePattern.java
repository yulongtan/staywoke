// https://leetcode.com/problems/find-and-replace-pattern/

class Solution {
  public List<String> findAndReplacePattern(String[] words, String pattern) {
    List<String> res = new ArrayList();
    for (String word : words) {
      Map<Character, Character> map = new HashMap();
      Set<Character> seen = new HashSet();
      boolean valid = true;
      for (int i = 0; i < word.length(); i++) {
        char c = word.charAt(i);
        char p = pattern.charAt(i);
        if (!map.containsKey(p)) {
          if (!seen.contains(c)) {
            map.put(p, c);
            seen.add(c);
          } else {
            valid = false;
            break;
          }

        } else if (map.get(p) != c) {
          valid = false;
          break;
        }
      }
      if (valid) {
        res.add(word);
      }
    }
    return res;
  }
}