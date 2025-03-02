var tribonacci = function (n) {
  if (n > 37) return
  //一開始預設，從i=3 開始
  let arr = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1] + arr[i - 3]
  }
  console.log(arr[n])
  return arr[n]
};
tribonacci(25)

//費氏數列
//arr[i] = arr[i - 2] + arr[i - 1] + arr[i - 3]
// 從範例得知 T_3 = 0 + 1 + 1 = 2  T(3-3)T(3-2)T(3-1)

//斐波那契数列
