
//for in , for of
//https://kanboo.github.io/2018/01/30/JS-for-of-forin/
const isUnique = function (str) {
  let obj = {}
  //製作雜湊表
  for (let item of str) {
    (!obj[item]) ? obj[item] = 1 : obj[item]++
  }
  for (let item in obj) {
    if (obj[item] > 1) return false
  }
  return true
}

isUnique('asdfa')

// console.log(isUnique('asdfa'))
