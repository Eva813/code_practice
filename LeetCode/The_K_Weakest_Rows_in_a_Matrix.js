//要從最弱排到強
//二分法


/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  let newArr = []
  for (let item of mat) {
    const index = findFirstOne(item)
    let count = index + 1
    newArr.push(count)
  }
  //newArr會呈現出 每一個陣列得1有多少
  let mapObj = {}
  for (let item in newArr) {
    if (!mapObj[`${item}`]) mapObj[item] = newArr[item]
  }
  //將 hash map 進行排序(物件中的 value 是可以排序)
  console.log(mapObj)
  console.log(Object.keys(mapObj).sort((a, b) => mapObj[a] - mapObj[b]))

  return Object.keys(mapObj).sort((a, b) => {
    if (mapObj[a] == mapObj[b]) { //if values are the same, sort on index
      return a - b
    } else {
      return mapObj[a] - mapObj[b] //sort by value
    }
  }).splice(0, k) //splice the array till the k

};

function findFirstOne(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] > 0) {
      //往右半區找
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return right

}

// if (arr[mid] < 0) {
//   right = mid - 1
// } else {
//   left = mid + 1
// }

kWeakestRows([[1, 1, 0, 0, 0], [1, 1, 1, 1, 0], [1, 0, 0, 0, 0], [1, 1, 0, 0, 0], [1, 1, 1, 1, 1]], 3)


///https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/630098/javascript-92-100-binary-search-hashmap/
