/*
  The idea of this problem is to find letter pairs because that's what makes
  up a palindrome. 

  Example: aabbc (abcba). Its letter pairs are a and b, with c as its center.

  We loop through each character in the string and we check if it's in our character
  map. If it is in there, we add to the pair count, and remove it from the map.

  If it is in there, we just set its value to some value so that it does appear 
  in the map.

  At the end, we need to see if there exists a center once all the pairs are counted.
  We do that by checking the number of keys left in the map. That number indicates
  letters with no pairs. Every single one of them can be used as a possible center.
  For that reason, we can set the center to a value of 1.

  The return value should be pairs * 2 + center
*/

let longestPalindrome = (s) => {
  let map = {};
  let pairs = 0;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      delete map[s[i]];
      pairs++;
    } else {
      map[s[i]] = 1;
    }
  }

  // Calculate the center
  let center = Object.keys(map).length >= 1 ? 1 : 0;
  return pairs * 2 + center;
};

module.exports = longestPalindrome;