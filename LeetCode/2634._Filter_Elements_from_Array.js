/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let newArr = [];
  for (let indexNumber in arr) {
    const index = Number(indexNumber)
    //帶入值運算 fn(arr[index], index，有符合該 fn 結果的再傳回新陣列
    if (fn(arr[index], index)) {
      newArr.push(arr[index])
    }
  }
  console.log(newArr)
  return newArr;
};

//官方解法 4：就地進行操作
