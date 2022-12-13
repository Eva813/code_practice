//Count Negative Numbers in a Sorted Matrix
//使用 reduce 攤平
var countNegatives = function (grid) {
  let flat = grid.reduce((acc, cur) => [...acc, ...cur], [])
  console.log(flat)
  let count = 0;
  for (let item of flat) {
    console.log(item)
    if (item < 0) count++
  }
  console.log(count)
  return count
};



var countNegatives2 = function (grid) {
  grid.reduce((acc, curr) => acc + curr.filter(n => n < 0).length, 0);

};

//二分法：https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/629112/javascript-binary-search/
//先撰寫一個找出第一個負數index的二分函數


function searchFirstNegativeIndex(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    //判斷 index 的值小於0
    if (arr[mid] < 0) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}


var countNegatives3 = function (grid) {
  let count = 0;
  for (let item of grid) {
    console.log(item); //陣列種的小陣列
    const index = searchFirstNegativeIndex(item)
    console.log(index, '第二:', item.length - index)
    //利用陣列長度去剪掉第一個出現的負數位置，就可以計算出陣列中有幾個負數
    count += item.length - index
  }
  return count
};

//陣列為遞減
countNegatives3([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]])
