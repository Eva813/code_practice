// You are given an integer array cost where cost[i] is the cost of ith step on a staircase.Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

var minCostClimbingStairs = function (cost) {

  if (cost.length > 1000) return
  //花最少的成本走到最尾端
  let newArr = []
  newArr[0] = cost[0]
  newArr[1] = cost[1]
  //先比較0,1 的cost

  for (let i = 2; i < cost.length; i++) {
    //i=2 ,Math.min(newArr[1], newArr[0])
    newArr[i] = Math.min(newArr[i - 1], newArr[i - 2]) + cost[i]
    //newArr[3]=30 --> 計算 cost ,因為可以走1或2 步，所以最後再選擇值較小的可以抵達終點
    console.log('newArr[i]', newArr[i])
  }

  console.log('r2', newArr)
  console.log('r5', Math.min(newArr[newArr.length - 1], newArr[newArr.length - 2]))
  return Math.min(newArr[newArr.length - 1], newArr[newArr.length - 2])

};
// minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
minCostClimbingStairs([10, 15, 20])


//參考資料https://ivyhungtw.medium.com/leetcode-746-min-cost-climbing-stairs-easy-javascript-dynamic-programming-solution-9e7baf4cf8c6
