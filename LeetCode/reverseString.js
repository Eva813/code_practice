const reverseString = function (s) {
  // console.log(s)
  let start = 0;
  let end = s.length - 1
  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]]
    start++
    end--
  }
  // console.log(s)

};
const s = ['a', 'p', 'p', 'l', 'e']
reverseString(s);
console.log(s);


function promiseFn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num) {
        resolve('成功')
      } else {
        reject(new Error('失敗'))
      }
    }, 0)

  });
}
promiseFn(1)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
