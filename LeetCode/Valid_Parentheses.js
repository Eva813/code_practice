var isValid = function (s) {

  const arr = [];
  //做一個物件來最為配對
  const map = {
    "}": "{",
    ")": "(",
    "]": "[",
  }

  for (let item of s) {
    // console.log('item', item)
    if (item === '{' || item === '(' || item === '[') {
      arr.push(item);
      console.log('arr', arr)
    } else {
      //pop() 取出最後一個\
      console.log('itemElse', item)
      console.log('arr.pop:', map[item])
      if (arr.pop() !== map[item]) {
        return false;
      }
    }

  };
  return arr.length === 0;
}
isValid("()[]{}")


//圖：https://ithelp.ithome.com.tw/articles/10217603
// for of https://kanboo.github.io/2018/01/30/JS-for-of-forin/
//https://medium.com/i-am-mike/javascript-%E7%9A%84-leetcode-%E6%BC%94%E7%AE%97%E4%B9%8B%E8%B7%AF-%E4%B8%80-3a38bea6dccc
