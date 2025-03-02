
//此題可以用雜湊表來解答
var firstUniqChar = function (s) {
  let obj = {}
  for (let el of s) {
    (!obj[el]) ? obj[el] = 1 : obj[el]++
  }
  console.log('obj', obj)
  for (let i = 0; i < s.length; i++) {
    const stringLetter = s[i]
    if (obj[s[i]] == 1) return i
  }
  return -1

};
// firstUniqChar("loveleetcode")

////

// var firstUniqChar2 = function (s) {
//   let obj = {}
//   for (let item of s) {
//     (!obj[item]) ? obj[item] = 1 : obj[item]++
//   }
//   console.log(obj)
//   for (let i in obj) {
//     console.log(obj[i])
//     if (obj[i] === 1) return i
//   }
//   return -1

// };
// firstUniqChar2("loveleetcode")


//參考：https://losseff.xyz/leetcode/001-first-unique-character-in-a-string/javascript/
