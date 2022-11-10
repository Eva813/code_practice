//注意這裡的眾數不再是 1/2而是超過1 / 3 => 所以超過 三分之一可能會有多個
// 就是 0，1，2 三種可能

var majorityElement = function (nums) {
  // 只要是 > n/3 就進入陣列
  let candidate1 = null;
  let candidate2 = null;
  let count1 = 0;
  let count2 = 0;

  for (let num of nums) {

    if (candidate1 === num) {
      count1++
    } else if (candidate2 === num) {
      count2++
    } else if (count1 === 0) {
      candidate1 = num;
      count1++
    } else if (count2 === 0) {
      candidate2 = num;
      count2++
    } else {
      count1--;
      count2--;
    }
  }

  console.log('data:', candidate1, candidate2)
  count1 = 0;
  count2 = 0;
  const res = [];

  limit = Math.floor(nums.length / 3)

  for (let num of nums) {
    if (candidate1 === num) count1++;
    else if (candidate2 === num) {
      count2++;
    }
  }
  if (count1 > limit) res.push(candidate1)
  if (count2 > limit) res.push(candidate2)
  console.log(res, count1, count2)
  return res

};
majorityElement([1, 2])

//參考
//https://juejin.cn/post/7025619880225275934
//https://github.com/azl397985856/leetcode/blob/master/problems/229.majority-element-ii.md
// https://codeantenna.com/a/4uEX0ewT0p
