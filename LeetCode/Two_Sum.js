var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    console.log('i', i)
    let sum = 0;
    for (let j = i + 1; j < nums.length; j++) {
      console.log(j)
      sum = nums[i] + nums[j]
      console.log('result', sum)
      console.log([i, j])
      if (sum === target) return [i, j]
    }

  }
};
// [0,1]
//O(n^2)


//使用Object實作 hashmap
//O(n)
// nums=[1,5,9] ; target = 10, see value one at index=0
// map = { 1:0 , 5:1 , 9:2} , 看到 1 是在  index=0
// i= 0, value=1
// completement_pair = 10-1 = 9
// 遇到 9 時候, 10 - 9 = 1 ; 核對前面的物件 有 value = 1
// map[1]
let twoSum3 = function (nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {

    let value = nums[i]
    console.log('一開始', value)
    //宣告比較的變數
    let completementPair = target - value
    console.log('completementPair', completementPair)
    console.log('mapValue', map)
    //製作 hashtable
    if (map[completementPair] !== undefined) {
      console.log('map[completementPair]', map[completementPair], i)
      return [map[completementPair], i]
    } else {
      //沒有對到的會形成 物件資料=> key 為 value , 物件的值為 i 
      console.log('map[value]', map[value] = i)
      map[value] = i
    }
  }
}


//使用Object實作 hashmap
// nums=[1,5,9] ; target = 10, see value one at index=0
// map = { 1:0 , 5:1 , 9:2} , 看到 1 是在  index=0
// i= 0, value=1
// completement_pair = 10-1 = 9
// 遇到 9 時候, 10 - 9 = 1 ; 核對前面的物件 有 value = 1
// map[1]
let twoSum4 = function (nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    let compair = target - value //7
    if (map[compair] !== undefined) {
      console.log('map[compair]', map[compair])
      //最後回傳之前有出現在 map 中的值(他的 index)
      return [map[compair], i]
    } else {
      //如果沒有存在於map中，就將該值存入（以 值 對應 index 方式）
      map[value] = i
    }
  }
}

//https://www.youtube.com/watch?v=NLhkpg9p7VQ
//要練習：
// twoSum4([2, 7, 11, 15], 9)

let twoSum2 = function (nums, target) {
  let dict = {};
  //將陣列存為kay
  for (let i = 0; i < nums.length; i++) {
    dict[nums[i]] = i;
    console.log('dic', dict[nums[i]] = i)
  }
  console.log('dic222', dict)
  for (let x = 0; x < nums.length; x++) {
    let goal = target - nums[x];

    if (goal in dict && x != dict[goal]) {
      console.log('goal in dict', goal in dict)
      console.log('goal in dict', [x, dict[goal]])

      return [x, dict[goal]];
    }

  }
}
//將班上同學的成績與櫃子號碼用object紀錄
//直覺會想說要將櫃子號碼存在key，成績存value
//但是最後題目是要回傳櫃子號碼，因此將櫃子號碼放在value，之後方便得到值
//設定值dict[key]=value
//in用法是會看goal值有沒有出現在object的key過，有就回傳true
//x!=dict[goal]預防x數字重複使用

// twoSum2([2, 7, 11, 15], 9)



let twoSumNew = function (nums, target) {
  // 創建一個空對象作為哈希表
  const mapData = {};
  
  // 遍歷數組中的每個元素
  for (let i = 0; i < nums.length; i++) {
    // 計算當前元素所需要的補數
    console.log('nums[i]', nums[i])
    const complement = target - nums[i];
    
    // 相減後得值目前是否存在於 mapData
    if (mapData.hasOwnProperty(complement)) {
      return [mapData[complement], i];
    }
    mapData[nums[i]] = i;
  }
  

  return [];
}

twoSumNew([2, 7, 11, 15], 9)
