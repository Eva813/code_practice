//majority element(佔大多數的元素)
//is the element that appears more than ⌊n / 2⌋ times
//使用 hash Table
var majorityElement = function (nums) {
  let newObj = {}
  for (let num of nums) {
    // console.log(num)
    (!newObj[num]) ? newObj[num] = 1 : newObj[num]++
  }
  // console.log(newObj)
  let nNum = nums.length / 2
  // console.log('nNum', nNum)
  for (let key in newObj) {
    if (newObj[key] > nNum) return key
  }

};
// majorityElement([3, 2, 3])



//2. Boyer–Moore majority vote algorithm(摩爾投票算法): 刪去一個數列中的兩個不同的數字，不會影響該數列的majority element。


//直覺可能會想使用HashMap來解

//這麼做的時間複雜度為O(n)，空間複雜度亦為O(n)，
// 因為插入耗費的時間為O(1)，插入n個數即為O(n)，
// 同時，我們只能保證最多有n - ⌊ n / 2 ⌋的不同種類的數，
// 所以空間上還是保持在O(n)的複雜度。


// 我們可以使用下列的方式來進行陣列運算：

// 取出第一個數放到一個暫存的變數(res)，
// 將計數器(count)設定為1，代表這個數出現1次。
// 取出下一個數nums[i]，如果和res相等，則將計數器 + 1；
// 如果和res不同，且計數器 > 0時，將計數器 - 1；(代表取這兩個數成對移除)
// 如果和res不同但是計數器 = 0時，將res更改為nums[i]並將計數器 + 1
//   (代表res已經用完了，現在還沒被移除的是nums[i])
// 反覆進行步驟2直到陣列結尾，剩下的res即為答案。
// (因為兩兩移除到最後一定是非majority element的先被移光)

var majorityElement2 = function (nums) {
  let candidate;
  let count = 0;

  for (let elem of nums) {
    if (count === 0) {
      candidate = elem;
    }
    if (candidate === elem) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;

};
majorityElement2([3, 2, 3])

// 參考：https://dev.to/alisabaj/the-boyer-moore-majority-vote-algorithm-finding-the-majority-element-in-an-array-5dgb
//The algorithm only works with existing (n/2 +1) or more repetitions
