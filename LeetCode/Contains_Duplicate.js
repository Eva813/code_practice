//Contains Duplicate
//有重複的值就回傳true
//可以用雜湊表做
var containsDuplicate = function (nums) {
  if (nums.length <= 0) return
  let newObj = {}
  for (let num of nums) {
    (!newObj[num]) ? newObj[num] = 1 : newObj[num]++
  }
  console.log(newObj)
  for (let key in newObj) {
    console.log(newObj[key])
    if (newObj[key] >= 2) return true
  }
  return false

};
// containsDuplicate([1, 2, 3, 1])

//使用陣列方法 indexOf(nums[i])<0
//也可以使用 includes

//另外嘗試使用 set ，直接
// var containsDuplicate2 = function (nums) {
//   let newArr = new Set(nums)
//   if ([...newArr].length !== nums.length) return true
//   else return false

// };

// containsDuplicate2([1, 2, 3, 1])


//https://fatree.medium.com/leetcode-javascript-217-contains-duplicate-fdb89367a396
//https://www.youtube.com/watch?v=tVr0xWxnX14
