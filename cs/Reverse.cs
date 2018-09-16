// Given a string, return it reversed
public string Reverse(string s)
{
    if (s.Length() < 2)
    {
        return s;
    }
    var result = "";
    for (var i = s.Length() - 1; i >= 0; i--)
    {
        result += s[i];
    }
    return result;
}