var fib = function (n) {
  //以index 比擬為第n驟
  if (n > 30 || n < 0) return
  // if (n = 0) return 0
  let arr = [0, 1]// Initialize array
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1]
  }
  console.log(arr)
  return arr[n]
};
fib(4)

//參考：https://stackoverflow.com/questions/7944239/generating-fibonacci-sequence
