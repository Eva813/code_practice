/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// targetIndices([1, 2, 5, 2, 3], 3)


var targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b)
  const result = []
  for (let index in nums) {
    if (nums[index] === target) result.push(index)
  }
  return result

};

// indexOf(num);
// findIndex()
//https://www.freecodecamp.org/news/how-to-find-the-index-where-a-number-belongs-in-an-array-in-javascript-9af8453a39a8/

//二分法：??
//https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/1852027/javascript-fast-solution-with-binary-search/

var targetIndices2 = function (nums, target) {
  nums.sort((a, b) => a - b)

  const result = []
  let left = 0;
  let right = nums.length - 1;
  let middle;
  while (left <= nums.length) {
    middle = Math.floor((left + right) / 2);
    if (target > nums[middle]) {
      left = middle + 1
    } else if (target < nums[middle]) {
      right = middle - 1
    } else if (target === nums[middle]) {
      return result.push(middle)
    }
  }
  return []

};


targetIndices2([1, 2, 5, 2, 3], 3)
