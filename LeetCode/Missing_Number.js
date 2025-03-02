//nums 不重複 n 為陣列長度，也表示幾到幾
var missingNumber = function (nums) {
  nums.sort()
  console.log(nums)
  for (let i = 0; i <= nums.length; i++) {
    console.log(i)
    if (nums[i] !== i) return i
  }
};
// missingNumber([2, 0])
// array[0] = 0

//使用 hash table

var missingNumber2 = function (nums) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    (!obj[`${nums[i]}`]) ? obj[`${nums[i]}`] = true : obj[`${nums[i]}`]++
  }
  let index = -1;
  for (let i = 0; i < nums.length + 1; i++) {
    //如果 obj[i] 沒有值，就表示缺少該值
    console.log(obj[i])
    if (!obj[i]) {
      index = i;
      break;
    }
  }
  console.log('index', index)
  return index;

};
missingNumber2([9, 6, 4, 2, 3, 5, 7, 0, 1])


//較快速的寫法
var missingNumber3 = function (nums) {
  let gSum = (nums.length * (nums.length + 1)) / 2
  //陣列累加
  const nSum = nums.reduce((acc, el) => acc + el, 0)
  return gSum - nSum

};
//https://www.youtube.com/watch?v=8rMNikLmheI


