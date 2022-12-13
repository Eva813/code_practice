/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let middle;
  while (left <= length) {
    middle = Math.floor((left + right) / 2);
    if (target > nums[middle]) {
      left = middle + 1
    } else if (target < nums[middle]) {
      right = middle - 1
    } else if (target === nums[middle]) {
      return middle
    }
  }
  return -1
};

search([-1, 0, 3, 5, 9, 12], 9)
