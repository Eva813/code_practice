//string tag
//every 用法
var longestCommonPrefix = function (strs) {
  console.log(strs)
  const firstStr = strs[0]
  //如果今天進來一個空陣列，那 firstStr 就會是 undefined
  if (!firstStr) return '';

  let condition = true
  let count = -1;
  while (condition) {
    count += 1;
    //從0開始判斷

    condition = strs.every((str, i) => {
      firstStr[count] === str[count]
    });

    if (count === firstStr.length) {
      condition = false;
    }
    console.log('count', count)
  }



  return firstStr.slice(0, count); // (4)
};
longestCommonPrefix(["flower", "flow", "flight"])

//https://medium.com/starbugs/js-%E7%9A%84%E6%BC%94%E7%AE%97%E6%B3%95%E9%A4%8A%E6%88%90%E4%B9%8B%E8%B7%AF-14-longest-common-prefix-91d8f34f90d4

//以下寫法比較理解 every 的判斷
function prefix(words) {
  // check border cases size 1 array and empty first word)
  if (!words[0] || words.length == 1) return words[0] || "";
  let i = 0;
  // while all words have the same character at position i, increment i
  while (words[0][i] && words.every(w => w[i] === words[0][i]))
    i++;

  // prefix is the substring from the beginning to the last successfully checked i
  return words[0].substr(0, i);
}
prefix(["abcdefgh", "abcde", "abe"])

//https://stackoverflow.com/questions/68702774/longest-common-prefix-in-javascript
