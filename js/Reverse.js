// Given a string, return it reversed
function reverse(s) {
  if (!s) {
    return '';
  }
  if (s.length < 2) {
    return s;
  }
  var result = '';
  for (var i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }
  return result;
}

module.exports = reverse;