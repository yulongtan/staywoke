
/**
 * https://leetcode.com/problems/decode-string/
 * 
 * Given an encoded string, return its decoded string. 
 * 
 * The encoding rule is: k[encoded_string], where the encoded_string inside the 
 * square brackets is being repeated exactly k times. Note that k is guaranteed 
 * to be a positive integer. 
 * 
 * You may assume that the input string is always valid; 
 * No extra white spaces, square brackets are well-formed, etc.
 * 
 * Furthermore, you may assume that the original data does not contain any 
 * digits and that digits are only for those repeat numbers, k. For example, 
 * there won't be input like 3a or 2[4].
 * 
 * @param {String} s String to decode
 */
const decodeString = (s) => {
  if (!s || !s.length) {
    return '';
  }
  let stack = [];
  for (let char of s) {
    if (char !== ']') {
      stack.push(char);
    } else {
      let str = '';
      let currentChar = stack.pop();
      while (currentChar !== '[') {
        str = currentChar + str;
        currentChar = stack.pop();
      }
      let num = '';
      currentChar = stack.pop();
      // while it's a number and stack is not empty
      while (!Number.isNaN(Number(currentChar))) {
        num = currentChar + num;

        // This part is okay to do in js. Popping an empty array returns undefined
        currentChar = stack.pop();

      }
      stack.push(currentChar);
      stack.push(str.repeat(Number(num)));
    }
  }
  return stack.join('');
};

module.exports = decodeString;