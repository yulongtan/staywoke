// https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/

// Interesting problem! My first initial thought was to use a Stack because
// that's a really good strat for parens and it seems to work out here.
// Idea is to keep adding to the stack, and then once you find a ),
// go back until you find a (. Everything should be reversed from this
// because you're adding to a stack.

class Solution {
  public String reverseParentheses(String s) {
    if (s.length() == 0) {
      return "";
    }
    Stack<Character> stack = new Stack();
    for (int i = 0; i < s.length(); i++) {
      char c = s.charAt(i);
      if (c == ')') {
        char top = stack.pop();
        String builder = "";
        while (top != '(' && !stack.isEmpty()) {
          builder += top;
          top = stack.pop();
        }
        if (i < s.length()) {
          for (int j = 0; j < builder.length(); j++) {
            stack.push(builder.charAt(j));
          }
        }
      } else {
        stack.push(c);
      }
    }
    String result = "";

    // The solution is now in the stack, but backwards, so we reverse it out by adding result last
    while (!stack.isEmpty()) {
      result = stack.pop() + result;
    }
    return result;
  }
}