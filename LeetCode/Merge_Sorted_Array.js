//non-decreasing order 非遞減順序
//整數的數量
//with the underlined elements coming from nums1.

const merge2 = function (nums1, m, nums2, n) {

  if ((m == 0 & n == 1) || (n == 0 & m == 1)) return result = [1]
  nums1 = [...nums1, ...nums2].filter(item => item !== 0).sort()
  console.log(nums1)
  return nums1
};


//使用 pointer
const merge = function (nums1, m, nums2, n) {
  let pointer = m + n;
  m--;
  n--;
  // 從最後比
  while (pointer > 0) {
    pointer--;
    if (n < 0 || nums1[m] > nums2[n]) {
      nums1[pointer] = nums1[m]
      m--;
    } else {
      nums1[pointer] = nums2[n];
      n--;
    }

  }
  console.log(nums1)
  return nums1;
};


//氣泡排序法 兩兩比較換位置
var merge3 = function (nums1, m, nums2, n) {

  var index = 0;
  //將nums2裡面的值放在nums1，使用loop
  //當 m (陣列中的整數), for 的範圍 是 m+n 為陣列總長 
  for (var i = m; i < m + n; i++) {
    nums1[i] = nums2[index];
    console.log('m', i, index)
    index++;
  }

  //使用泡沫排序法重新排序
  //同一個陣列
  for (var j = 0; j < nums1.length - 1; j++) {
    //k值會比j大1
    for (var k = j + 1; k < nums1.length; k++) {
      if (nums1[j] > nums1[k]) {
        var temp = nums1[j];
        nums1[j] = nums1[k];
        nums1[k] = temp;
      }
    }
  }
};


merge([1, 2, 3, 0, 0], 3, [2, 5, 6], 3)
merge2([1, 2, 3, 0, 0], 3, [2, 5, 6], 3)
merge3([1, 2, 3, 0, 0], 3, [2, 5, 6], 3)

//https://hannahpun.gitbook.io/leetcode-note/two-pointer/88-merge-sorted-array

//https://ithelp.ithome.com.tw/articles/10236045
//[演算法] 氣泡排序法（Bubble Sort)
