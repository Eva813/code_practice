
//getKeyByValue  : https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value
// const getKeyByValue = (obj, val) => {
//   console.log('dd', Object.keys(obj).find(key => obj[key] === val))
//   return Object.keys(obj).find(key => obj[key] === val)
// }
//製作雜湊表
var singleNumber = function (nums) {
  if (nums.length === 0) return
  const newObj = {}
  for (let i = 0; i < nums.length; i++) {
    (!newObj[`${nums[i]}`]) ? newObj[`${nums[i]}`] = 1 : newObj[`${nums[i]}`]++
  }
  for (let key in newObj) {
    if (newObj[key] === 1) return key
  }
  // return Object.keys(newObj).find(key => newObj[key] === 1)
};
singleNumber([4, 1, 2, 1, 2])


//參考 https://www.youtube.com/watch?v=lRGoZyjkZ3U



