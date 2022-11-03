var climbStairs = function (n) {

  if (n < 1 || n > 45) return
  let W = [0, 1, 2];
  // 費氏數列 f(n) = f(n-1) + f(n-2)
  if (W.length < n) {
    console.log('n', n)
    W[n] = climbStairs(n - 2) + climbStairs(n - 1);
  }
  return W[n];
};

//動態方式

var climbStairs2 = function (n) {
  if (n > 45) return
  //運用陣列動態新增，將陣列加入新的值

  var W = [0, 1, 2];
  for (var i = 3; i <= n; i++) {
    console.log('i', i)
    //陣列的第幾項為....
    W[i] = W[i - 2] + W[i - 1];
    //W[3] = W[1]+W[2]
    //W[4] = W[2]+W[3]
    console.log('n', W[i])
  }
  console.log(W[n])
  console.log(W)
  return W[n];
};

climbStairs2(4) // 結果為5


//參考資料https://ithelp.ithome.com.tw/articles/10279251
//https://zyrastory.com/coding/leetcode/leetcode-70-climbing-stairs-%e8%a7%a3%e9%a1%8c%e6%80%9d%e8%b7%af%e5%8f%8a%e7%bf%bb%e8%ad%af/
