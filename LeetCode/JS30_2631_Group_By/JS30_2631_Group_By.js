// 輸入：
// [
//   {"id":"1"},
//   {"id":"1"},
//   {"id": 2},
// ],
// fn = function (item) {
//   return item.id;
// }

// 輸出：
// {
//   "1": [{"id": "1"}, {"id": "1"}],
//   “2”：[{“id”：“2”}]
// }

// 解釋：
// 輸出來自函式 array.groupBy(fn)。
// 分組方法是從陣列中的每個項目中取得 "id"。
// 有兩個 "id" 為 1 的物件。所以將這兩個物件都放在第一個陣列中。
// 有一個 "id" 為 2 的物件。所以該物件被放到第二個陣列中。


const groupBy = function(arr, fn) {

  let obj = {};
  arr.forEach(item => {
    let key = fn(item);
    if (!obj[key]) {
      //用此 key 建立 array
      obj[key] = [];
    }
    obj[key].push(item);
  });
  console.log(obj);
  return obj;
};

groupBy([{"id":"1"},{"id":"1"},{"id": 2},], function(item) {
  return item.id;
});


Array.prototype.groupBy = function(fn){
  let obj = {}
  this.forEach((item)=>{
    let key = fn(item)
    if(!item[key]){
      obj[key] = []
    }
    obj[key].push(item)
  })
  return obj
}
