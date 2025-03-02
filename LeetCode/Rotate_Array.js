
//自己的解法錯誤...

var rotate = function (nums, k) {
  if (k < 0) return
  // let newArr = []
  let numsCut = nums.slice(0, k)
  let newArr = nums.slice(-k)

  // for (i = k; i < nums.length; i++) {
  //   newArr.push(nums[i])
  // }
  console.log('newArr', newArr)
  console.log(newArr.concat(numsCut))
  return newArr.concat(numsCut)
  return [...newArr, ...numsCut]


};
// rotate([1, 2, 3, 4, 5, 6, 7], 3)
// rotate([-1, -100, 3, 99], 2)


//https://dev.to/seanwelshbrown/two-ways-to-rotate-an-array-in-javascript-1bi3
//會有 問題：Time Limit Exceeded
const rotateArray1 = function (nums, k) {
  //unshift 將給入的元素值放到最前面
  for (let i = 0; i < k; i++) {
    console.log('nums.pop()', nums.pop())
    nums.unshift(nums.pop());
  }
  console.log('num', nums)
  return nums;
}
// rotateArray1([1, 2, 3, 4, 5, 6, 7], 3)

//參考資料=> https://www.youtube.com/watch?v=NNkSsmZYU7s

//k = k % nums.length , if k is larger than num length then it's keep on cycling
//so we want to just go ahead and say k is going to equal k mod\
/// 陣列調換
//0
// 0< 3 -> nums[0],nums[3] = nums[3],nums[0]  --> [4,1]
//1
// 1<2 -> nums[1],nums[2] = nums[2],nums[1]  --> [3,2]
//2
// 2 < 1  --> 不成立
//1
// 1 < 0 --> 不成立
const revNum = (nums, start, end) => {
  while (start < end) {

    [nums[start], nums[end]] = [nums[end], nums[start]]
    console.log('[nums[start], nums[end]]', [nums[start], nums[end]])
    start++;
    end--;
  }
  console.log(nums)
}
//end -> 陣列長度-1
// revNum([1, 2, 3, 4], 0, 3)

const rotateArray2 = function (nums, k) {
  k = k % nums.length
  //先整個陣列 reverse
  nums.reverse()
  revNum(nums, 0, k - 1)
  revNum(nums, k, nums.length - 1)
}

rotateArray2([1, 2, 3, 4, 5, 6, 7], 3)


