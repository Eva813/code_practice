//nums - >n: nums.length
//m : queries.length
//返回长度为 m 的数组答案
//從 nums 中找出總和 <= queries
// 記錄使用幾個element

// const binarySearch = (prefixSum, query) => {
//   let left = 0, right = prefixSum.length - 1, ans = -1;

//   while (left <= right) {
//     const middle = Math.floor((right + left) / 2);

//     if (prefixSum[middle] <= query) {
//       ans = middle;
//       left = middle + 1;
//     }
//     else {
//       right = middle - 1;
//     }
//   }

//   return ans + 1;
// };


const findTarget = (arr, target) => {

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((right + left) / 2);
    if (arr[middle] <= target) {

      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  //right 最終結果為呈現 index，但要的結果應為 由幾個數值相加，故再加上1
  return right + 1
}

var answerQueries = function (nums, queries) {
  //製作陣列加總如[1,2,4,5] => [1,3,7,12] ==> 從累加得值去比較
  let sum = 0
  nums.sort((a, b) => a - b)
  const prefixSum = nums.map((value) => {
    // console.log(value)
    return sum += value
  });
  // console.log(prefixSum)
  // for (let i = 0; i <= nums.length; i++) {
  //   newArr[i] = newArr
  // }
  let finalArr = []
  for (let i = 0; i < queries.length; i++) {
    let value = queries[i]
    console.log(value)
    let indexValue = findTarget(prefixSum, +value)
    finalArr.push(indexValue)
    console.log(indexValue)
  }
  console.log('finalArr:', finalArr)
  console.log('data:', queries.map(query => findTarget(prefixSum, query)))

};

answerQueries([4, 5, 2, 1], [3, 10, 21])
// findArr([4, 5, 2, 1], 3)

///計算 nums 的累加數值 => 再用 binary search 找出

//https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/2584194/javascript-easy-solution-to-understand/
//https://www.youtube.com/watch?v=KYBB-yFPgF8

