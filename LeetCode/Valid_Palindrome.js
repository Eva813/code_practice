var isPalindrome = function (s) {
  //有哪些符號
  if (s === '') return true
  //轉小寫
  s = s.toLowerCase();
  //取代非文字部分
  s = s.replace(/[^a-z0-9]/ig, ""); //將不是字母和數值的取代掉
  console.log('string', s)
  const reversString = s.split("").reverse().join("");
  console.log('reverse', reversString)
  console.log('reverse', s.includes(reversString))
  return s.includes(reversString);
  //字串可以直接比較 s === reversString 

};

isPalindrome("A man, a plan, a canal: Panama")


///[^a-z0-9-]+/gi有什么作用 => 检查（或者删除）非数字、字母、减号的内容。 
//  => /[a-zA-Z0-9]/: 表示任何字母數字都匹配。


//https://leetcode.com/problems/valid-palindrome/solutions/247250/javescript-pure-solution/



//JS Solution - Two Pointer
//https://leetcode.com/problems/valid-palindrome/solutions/628662/js-solution-two-pointer/
