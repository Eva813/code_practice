//判斷 符號是否配對


//注意此題應該要馬上 兩兩配對才對(所以要取陣列的最後一項去判斷)！
var isValid = function (s) {

  const arr = [];
  //做一個物件來最為配對
  // 
  const map = {
    "}": "{",
    ")": "(",
    "]": "[",
  }

  for (let item of s) {

    //先判斷一邊
    if (item === '{' || item === '(' || item === '[') {
      arr.push(item);
      console.log('arr', arr)
    } else {
      //pop() 取出最後一個\
      // console.log('arr', arr)
      console.log('itemElse', arr.pop())
      console.log('itemElse', item)
      // console.log('arr.pop:', map[item])
      if (arr.pop() !== map[item]) {
        return false;
      }
      // else {
      //   arr.pop()
      // }
      console.log('arr2', arr)
    }

  };

  return arr.length === 0;
}



//圖：https://ithelp.ithome.com.tw/articles/10217603
// for of https://kanboo.github.io/2018/01/30/JS-for-of-forin/
//https://medium.com/i-am-mike/javascript-%E7%9A%84-leetcode-%E6%BC%94%E7%AE%97%E4%B9%8B%E8%B7%AF-%E4%B8%80-3a38bea6dccc


//注意此題應該要馬上 兩兩配對才對(所以要取陣列的最後一項去判斷)！
var isValid2 = function (s) {
  const hashMap = { "(": ")", "{": "}", "[": "]" };
  const stack = [];
  for (let ch of s) {
    console.log('每一個', hashMap[ch]) //取得右側的括號,物件的value
    if (hashMap[ch]) {
      // ch is an opening bracket
      stack.push(hashMap[ch]);
    } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
      //stack[stack.length - 1] === ch) => 判斷陣列中的最後一項值與傳入的 ch 相同
      // ch is a closing bracket and top of stack matches
      console.log('arr', stack)
      stack.pop();
    } else {
      // ch is a closing bracket and top of the stack doesn't match
      return false;
    }
  }
  console.log('ss', stack)
  return stack.length === 0;
};
isValid2("{[]}")


//https://www.youtube.com/watch?v=OxbxP5_-Tcs
