//查看符合anagram兩組字，代表組成這兩個單字的字母元素與個數會是一樣的
//字串字母的拆分
//1. 一種是用排序把字串按a-z順序排好之後，比對兩個字串是否相等
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  console.log(s, t)
  const sArray = s.split('').sort().join('')
  const tArray = t.split('').sort().join('')
  console.log(sArray, tArray)
  //排序完再轉回字串比較是否相等
  console.log(sArray == tArray)
  return sArray == tArray

};


//雷同的方法 2
var isAnagram2 = function (s, t) {
  if (s.length !== t.length) return false;

  //可以將字串使用用展開陣列，轉為陣列
  const arrays = [...s].sort();
  const arrayt = [...t].sort();

  for (let i = 0; i < s.length; i++) {
    if (arrays[i] !== arrayt[i]) {
      return false
    }
  }

  return true
};

//Hash Table : 用物件（object）來代表 Hash Table 的資料結構。
//解決了浪費記憶體空間的問題，能把放資料的table大小壓縮至接近真正需要放進table資料的數量
//不要排序, 計算出字母有幾個,如{a:2,c:1,t:1}

var isAnagram3 = function (s, t) {
  if (s.length !== t.length) return false;
  //宣告空物件
  const sCount = {}
  const tCount = {}
  const N = s.length
  //用長度來計算回圈要 loop 幾次
  for (let i = 0; i < N; i++) {
    console.log('ii', s[i])

    //設定初使
    if (!sCount[s[i]]) sCount[s[i]] = 0
    if (!tCount[t[i]]) tCount[t[i]] = 0
    sCount[s[i]]++
    tCount[t[i]]++
    console.log(i, 'ii2', sCount[s[i]])
  }
  //查看做出來得 Hash Table
  console.log(s, ':', sCount)
  console.log(t, ':', tCount)
  //最後將兩個表做比較 物件中某key 的 value
  for (let ch in sCount) {
    console.log('ch', ch, sCount[ch])
    if (sCount[ch] !== tCount[ch]) return false
  }
  return true

}
isAnagram3("anagram", "nagaram")


//1. https://medium.com/roywannago-%E6%97%85%E8%A1%8C%E4%B8%8D%E9%9C%80%E7%90%86%E7%94%B1/leetcode-%E5%88%B7%E9%A1%8C%E7%B4%80%E9%8C%84-242-valid-anagram-easy-1371a24af1c9
//2. https://blog.techbridge.cc/2017/01/21/simple-hash-table-intro/
//3. https://www.youtube.com/watch?v=YW-yS-iIPNk

//for... in ,for...of
  //https://pjchender.blogspot.com/2017/01/javascript-es6-for-of.html
  //https://kanboo.github.io/2018/01/09/JS-Traverse/
  //https://blog.csdn.net/weixin_44178305/article/details/110699908
