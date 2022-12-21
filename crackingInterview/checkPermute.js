//判斷兩個字串是否有一個是另一組字串的排列組合
//Valid_Anagram

var checkPermute1 = function (stringOne, stringTwo) {
  if (stringOne.length !== stringTwo.length) return false;
  //將字串轉陣列
  let newOne = stringOne.split('').sort().join('')
  console.log('one', newOne)
  let newTwo = stringTwo.split('').sort().join('')
  console.log(newOne === newTwo)
  return newOne === newTwo
};




//使用 雜湊表

var checkPermute = function (stringOne, stringTwo) {
  //先判斷陣列長度
  if (stringOne.length !== stringTwo.length) return false;
  let oneObj = {}
  let twoObj = {}
  let lengthNum = stringOne.length
  for (let i = 0; i < lengthNum; i++) {
    (!oneObj[stringOne[i]]) ? oneObj[stringOne[i]] = 1 : oneObj[stringOne[i]]++
    (!twoObj[stringTwo[i]]) ? twoObj[stringTwo[i]] = 1 : twoObj[stringTwo[i]]++
  }
  console.log(oneObj)
  console.log(twoObj)
  for (let i in twoObj) {
    //https://kanboo.github.io/2018/01/30/JS-for-of-forin/
    //物件用 in
    console.log(oneObj[i])
    if (oneObj[i] !== twoObj[i]) return false
  }
  return true
};

checkPermute('asdf', 'adsf')

// export function isPermutationSorted(str1, str2) {
//   if (str1.length === 0 || str1.length !== str2.length) {
//     return false;
//   }
//   // sort string using quicksort
//   str1.sort();
//   str2.sort();

//   return str1.every((v, i) => v === str2[i]);
// }
