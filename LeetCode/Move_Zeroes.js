//Move Zeroes
//先排序，0會在最前面，找出０的index
//使用 concat 會創立新陣列
//splice
var moveZeroes = function (nums) {
  nums.sort((a, b) => a - b)
  console.log(nums)
  let count = findFirstZero(nums, 0)
  let arr = nums.splice(0, count + 1)
  console.log(arr, nums, nums.concat(arr))
  return nums.concat(arr)
};

const findFirstZero = (nums, target = 0) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] <= target) {
      left = nums[middle] + 1
    } else {

      right = nums[middle] - 1
    }
  }
  console.log(left)
  return left
}

moveZeroes([0, 1, 0, 3, 12])

//類似雙指針解法
var moveZeroes2 = function (nums) {
  let start = 0
  let end = nums.length - 1
  while (start < end) {
    if (nums[start] == 0) {
      nums.splice(start, 1)
      nums.push(0)
      end--
    } else {
      start++
    }
  }
  return nums
};


var moveZeroes3 = function (nums) {
  let lastNoneZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      //找出不是0的索引, 並將其取代
      nums[lastNoneZeroIndex] = nums[i];
      lastNoneZeroIndex++;
      //找出之後要讓 lastNoneZeroIndex前進
    }
  }
  //將 以最後的索引 開始的元素，取代為0
  for (let i = lastNoneZeroIndex; i < nums.length; i++) {
    nums[i] = 0
  }
};
