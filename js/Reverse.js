// Given a string, return it reversed
function Reverse(s) {
    if (s.length < 2) {
        return s;
    }
    var result = '';
    for (var i = s.length - 1; i >= 0; i--) {
        result += s[i];
    }
    return result;
}