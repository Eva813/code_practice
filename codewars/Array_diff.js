

//今日kata 兩個陣列，去對照a,b之間的元素
// 原始題目如下: (6kyu)
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//[1,2],[1] ==> [2]
// [1, 2, 2, 2, 3], [2] ==> [1, 3]


const array_diff = function (a, b) {
  let resutArr = []
  resutArr = a.filter((e) => {
    //會回傳 true/false
    return (!b.includes(e))
  })
  //console.log(resutArr)
  return resutArr
}
array_diff([1, 2, 2, 3], [1])
console.log(array_diff([1, 2, 2, 3], [1]))

