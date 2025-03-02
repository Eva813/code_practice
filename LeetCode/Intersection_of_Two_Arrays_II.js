
//Intersection of Two Arrays II
//此方式，讓陣列進入，並判斷該index 的值是否有存在在另一個陣列中，如果有的話就存入 newArr 並且刪除該值
var intersect = function (nums1, nums2) {
  let newArr = []
  for (let i = 0; i < nums2.length; i++) {
    console.log(nums1[i], nums2[i])
    // console.log(nums1.includes(nums2[i]))
    if (nums1.includes(nums2[i])) {
      newArr.push(nums2[i])
      console.log('dd', nums1.indexOf(nums2[i]))
      nums1.splice(nums1.indexOf(nums2[i]), 1);
      console.log('nums1', nums1)
    }

  }
  console.log('new', newArr)
  return newArr
};
// intersect([1, 2, 2, 1], [2, 2])
intersect([4, 9, 5], [9, 4, 9, 8, 4])


// var intersect = function (nums1, nums2) {
//   let res = [];
//   for (var i = 0; i < nums2.length; i++) {
//     if (nums1.includes(nums2[i])) {
//       res.push(nums2[i]);
//       nums1.splice(nums1.indexOf(nums2[i]), 1);
//     }
//   }
//   return res;
// };


//https://medium.com/@chienrongkhor/leetcode-350-intersection-of-two-arrays-ii-30e69513f34f
