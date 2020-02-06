// aaabcccdeeef returns b
// aaabbc returns c
const firstNonRepeatingChar = s => {
  if (s.length === 0) {
    return '';
  }
  if (s.length < 2) {
    return s[0];
  }
  let seenCounter = 1;
  let lastSeen = s[0];
  for (let i = 1; i < s.length; i++) {
    let current = s[i];
    if (current === lastSeen) {
      seenCounter++;
    } else {
      if (seenCounter === 1) {
        return lastSeen;
      }
      seenCounter = 1;
      lastSeen = current;
    }
  }
  
  // Check if unique char is at the end
  return seenCounter > 1 ? '' : lastSeen;
}

module.exports = firstNonRepeatingChar;