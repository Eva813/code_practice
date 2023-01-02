
var aa = function (nums) {
  // let arr = s.split('')
  // console.log(arr)
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    (!obj[`${nums[i]}`]) ? obj[`${nums[i]}`] = 1 : obj[`${nums[i]}`]++
  }
  // for (let item of arr) {
  //   console.log(item)
  //     (!hash[s[item]]) ? hash[s[item]] = 1 : hash[s[item]]++
  // }
  let arr = Object.keys(obj).map((item) => `${obj[item]}${item}`)
  console.log(arr)
  console.log(Object.keys(obj))
  return Object.keys(obj).map((key) => `${obj[key]}${key}`).join('');
};


var aa = function (nums) {
  let result = '';
  if (nums.length > 0) {
    let count = 0;
    let value = nums[0];

    for (let i = 0; i < nums.length; i++) {
      // let entry = nums[i];

      if (nums[i] === value) {
        console.log(nums[i])
        count = count + 1;
      } else {
        result = result + `${count}${value}`;
        //count 初始
        count = 1;
        //
        value = nums[i];
        //進入不同的時候是i為多少
        console.log(i, value)
      }
    }
    console.log(value, count)
    result = result + `${count}${value}`;
  }
  console.log(result)
};


aa('wwwbbbw')

//https://dirask.com/posts/JavaScript-run-length-encoding-example-kDLV7j
