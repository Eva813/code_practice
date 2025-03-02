//happy Number
// 給定一個任一正整數n, 並把n轉換成 其所有位數的平方和
// 重複上述的動作直到我們發現n可以轉換成1 或者直到我們發現 n只能循環地轉換成各種不是1的數字
// 當n可以轉換成1的時候 代表他就是happy number



//會一直循環下去直到拿到1，並會傳true
//或是會變成，loops endlessly in a cycle which does not include 1
//設定一個num ( initialize a variable called sum)
//使用取餘數方式，
//If given n = 25, n%10 would give you the result of 5, and n would be 20
var isHappy = function (n) {
  let sum = 0;
  while (n > 0) {
    let e = n % 10 //9 //2%10為2
    n = Math.floor(n / 10); //19除以10=1.9 =>1 //2/10 =0.2 => 0
    sum += e * e;  //81 //1 => 82
  }
  if (sum === 1) {
    return true;
  } else if (sum > 1 && sum <= 4) {
    return false;
  }
  //每次回圈完之後，sum會變成下次回圈的n 再進去循環
  return isHappy(sum);
};

//以19

//參考：https://dev.to/alisabaj/the-happy-number-problem-mn2
//參考：https://www.youtube.com/watch?v=JuDxnx60XXM


// Pseudo Code:
// 1. Create map object.
// 2. While loop through "n" being not equal to 1.
// a.Create a current variable equal to "n".
//   b.Create sum variable.
//     c.While loop for current being not equal to 0.
// i.Add to sum the squared of(current mod 10).
//   ii.Divide current by 10.
// d.Condition if sum is in the map.
//   i.Return false.
//     e.Add sum to map with a value of true.
//       f.Set n = sum.
// 3. Return true.
var isHappy2 = function (n) {
  let map = {}
  //表示n＝1的時候就去return true
  while (n !== 1) {
    let current = n;
    let sum = 0;
    while (current !== 0) {
      //19,19%10 對10取餘數為9
      sum += (current % 10) ** 2 //81 
      //計算current
      current = Math.floor(current / 10) //1.9 => 1
    }
    if (map[sum]) {
      return false
    }
    map[sum] = true //{82:true}
    n = sum // 82
  }
  //當 n 為 1的時候，會跳出迴圈為true
  return true
};
isHappy2(2)
