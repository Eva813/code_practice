//n 為陣列長度
var fizzBuzz = function (n) {
  let arr = []
  for (let i = 1; i <= n; i++) {
    console.log(i)
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz")
    } else if (i % 3 === 0) {
      arr.push('Fizz')
    } else if (i % 5 === 0) {
      arr.push("Buzz")
    } else {
      arr.push(i)
    }
  }
  console.log(arr)
};
fizzBuzz(5)

//另解法
