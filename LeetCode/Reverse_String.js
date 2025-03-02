//string tag
//呼應之前解題 rotate Array 所使用的 反轉

var reverseString = function (s) {
  let start = 0
  let end = s.length - 1
  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]]
    start++
    end--
  }
};
reverseString(["h", "e", "l", "l", "o"])
