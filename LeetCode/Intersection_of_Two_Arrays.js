const intersection = function (nums1, nums2) {
  let newArray = [];
  for (i = 0; i < nums1.length; i++) {
    for (k = 0; k < nums2.length; k++) {
      console.log(i, k)
      // console.log(nums1[i], nums2[k])
      if (nums1[i] === nums2[k]) {
        newArray.push(nums1[i])
      }
    }
  }

  newArray = [...new Set(newArray)]
  console.log(newArray)
};

intersection([1, 2, 2, 1], [2, 2])


//https://www.delftstack.com/zh-tw/howto/javascript/javascript-remove-duplicates-from-an-array/
