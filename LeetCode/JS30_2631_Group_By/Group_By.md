## 題目描述:

請實踐一個陣列操作的方法 groupBy，該方法會讓任何陣列呼叫 array.groupBy(fn) 時，獲得該陣列分組後的結果。

所謂的陣列分組**，**是指陣列中的每個鍵都是 fn(arr[i]) 的輸出，輸出的陣列中，含有原始陣列中具有該鍵的所有項。

提供的回呼函式 fn 會接受陣列中的項目並傳回一個字串類型的鍵。每個值陣列的順序，會與陣列中元素出現的順序相同。任何順序的鍵都是可以接受的。

具體如下範例，輸入一個有物件的陣列，並且回呼函式是以 item.id 作為判斷，所以呼叫完 groupBy(fn) 後，會把 id 做為鍵，而有該 id 的物件，都會被放到同個陣列做為值，例如有 {"id":"1"} 的會被放在同個陣列。

### 解題思路

一開始題目沒理解好，直覺建立一個函式並可以帶入陣列以及 fn

```javaScript
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
```

#### 但是細看題目後，他希望呼叫 array.groupBy(fn)

#### 對 Array.prototype 添加方法時，這個方法會變成所有陣列實例的一部分。在這種情況下，當你對一個陣列調用 groupBy 方法時（例如 array.groupBy()），方法內部的 this 關鍵字自然地指向調用它的陣列實例。這意味著 this 就是你想要對其進行分組的那個陣列。

#### 舉例來說，如果你有一個陣列叫做 myArray 並且調用 myArray.groupBy(fn)，在 groupBy 方法的執行上下文中，this 會指向 myArray。這樣，方法內部可以直接訪問和操作 myArray 的元素。
