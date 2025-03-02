//判斷傳入的字串是否回文（palindrome）排列組合 (permutation)
/////
//even每個字元為雙數
//odd：必須是單一獨特的一個單字

//使用雜湊表=> 來計算每個字母
//如果有重複看到同樣的字母，就刪除
//check the hash at the end => odd->one key left, even -> no key left
//https://www.youtube.com/watch?v=9SQGxzoAB2Q
const checkPalindrome = (str) => {
  let hash = {};

}


checkPalindrome('Tact Coa')


//newset 用法
export function isPalindromePermutationsSet(str) {
  if (!str) {
    return false;
  }

  let chars = new Set();
  for (let char of str) {
    if (char !== ' ') { // ignore spaces
      if (chars.has(char)) {
        chars.delete(char);
      }
      else {
        chars.add(char);
      }
    }
  }
  //使用 Object.keys(chars).length
  return chars.size <= 1;
}
//https://github.com/careercup/CtCI-6th-Edition-JavaScript-ES2015/blob/master/src/chapter1/ch1-q4.js
