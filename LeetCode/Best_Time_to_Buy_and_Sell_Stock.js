
//會出現Time Limit Exceeded 
var maxProfit1 = function (prices) {
  //買低賣高
  // 用來儲存最大值
  let lastPrice = 0;
  // 跑兩個迴圈，用來計算買與賣的最大值
  for (i = 0; i < prices.length; i++) {
    for (j = i + 1; j < prices.length; j++) {
      // console.log('price', prices[i], prices[j])
      let profit = prices[j] - prices[i]
      // console.log('prof', profit)
      lastPrice = Math.max(lastPrice, profit)
    }
  }
  console.log('last', lastPrice)
  return lastPrice
};



var maxProfit = function (prices) {
  //買低賣高
  // 用來儲存最大值
  let maxProfit = 0;
  //先設定初始為最小值
  let minPrice = prices[0]
  for (let sell = 1; sell < prices.length; sell++) {
    //在裡面設置一個賣出的價格，與外層比較
    let sellPrice = prices[sell]
    let profit = prices[sell] - minPrice
    maxProfit = Math.max(maxProfit, profit)

    //要替最小值做變換
    if (sellPrice < minPrice) minPrice = sellPrice
  }
  return maxProfit
};

// prices = [7, 1, 5, 3, 6, 4]
maxProfit([7, 1, 5, 3, 6, 4])


//https://medium.com/nerd-for-tech/leetcode-121-best-time-to-buy-and-sell-stock-javascript-solution-1e690ce18668
