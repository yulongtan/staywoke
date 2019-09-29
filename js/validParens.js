/**
 * Daily Coding Problem: Problem #27 [Easy]
 * 
 * This problem was asked by Facebook.
 * Given a string of round, curly, and square open and closing brackets, 
 * return whether the brackets are balanced (well-formed).
 * 
 * For example, given the string "([])[]({})", you should return true.
 * Given the string "([)]" or "((()", you should return false.
 * 
 * @param {*} str 
 */
const validParens = (str) => {
  if (!str || !str.length) {
    return true;
  }
  const closing = {
    '}': '{',
    ']': '[',
    ')': '('
  };
  const stack = [];
  for (let c of str) {
    if (closing[c]) {
      let top = stack.pop();
      if (top !== closing[c]) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  return !stack.length;
}

module.exports = validParens;