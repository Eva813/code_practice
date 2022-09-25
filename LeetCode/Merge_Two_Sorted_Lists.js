///Constraints:

// The number of nodes in both lists is in the range[0, 50].
// - 100 <= Node.val <= 100
// Both list1 and list2 are sorted in non - decreasing order.

//須兩個指針分別指向給定的陣列，將節點值較小的添加到新的鏈結串列，添加完後將指標移往下一個節點，直到兩鏈結串列的節點都被添加到新的鏈結串列為止。
//linked lists是一種常見的資料結構，其使用node(節點)來記錄、表示、儲存資料(data)，並利用每個node中的pointer指向下一個node -> http://alrightchiu.github.io/SecondRound/linked-list-introjian-jie.html


//https://zhuanlan.zhihu.com/p/163136899
// 基礎介紹 dummy node -> 啞巴節點
//设置哑结点 new ListNode() (類似衛兵的概念)
//說明https://gammmkimo.medium.com/%E5%88%B7%E9%A1%8C%E6%97%A5%E8%A8%98-2-merge-two-sorted-lists-9effaca67b2e


//解說！！https://www.youtube.com/watch?v=k0Z6QlNs-Ig ,https://www.youtube.com/watch?v=BRkc1tHKc8E
//list 數據結構

//排好序的
//1. 創建 dummy
//2. 判斷 l1 和 l2 比較小的



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
//每一個節點的 list 都指向下一個節點，而最後一個節點的 next 是 null
//如何訪問list 中某個節點的 值，要從第一個節點開始，透過 next 依序訪問下一個節點重複操作直到抵達目標節點並讀取 value
//訪問第一個節點為 list.val  ; 訪問第二個節點 list.next.val ; 訪問第三個節點list.next.next.val 
//要將兩個 list 合併的方法，每次比較兩個 而最小的數挑出，放入新的 list
//但若不行創新的 list，就是比較哪個小就反迴哪一個節點
// 在返回此節點之前，要對他的 next 進行修改，將它改成下一個最小的數

//第二圈，比較第一個 list 的第二個節點與第二個list的第一個節點

var mergeTwoLists = function (l1, l2) {
  //current
  const dummy = new ListNode(-Infinity)
  //point dummy node
  let prev = dummy;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      //移動 prev list
      prev = l1
      //鏈錶指針 l1 就往後移動
      l1 = l1.next
    } else {
      prev.next = l2;
      prev = l2
      l2 = l2.next
    }
  }
  //如果 l1 是 null ,就是 l2
  if (!l1) prev.next = l2;
  if (!l2) prev.next = l1;
  return dummy.next
};

mergeTwoLists([1, 100], [3, 4, 6, 8])

//dummy.next
//Dummynext不是返回整个链表而是返回合并后链表的头节点
//return dummy.next 程序結束後，返回鍊錶，反回的是 dummy.next


//https://www.youtube.com/watch?v=eQGn1xbt1JU





var mergeTwoLists = function (l1, l2) {
  //宣告一個 dummy 作為最後可以反為 result link list
  const dummy = new ListNode(-Infinity)
  //curr 做為 result link list
  const curr = dummy
  //確保 li,l2 !== null
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      //鏈錶指針 l1 就往後移動
      l1 = l1.next
    } else {
      curr.next = l2;
      l2 = l2.next
    }
    // 每次判斷結束 都要移動 curr
    curr = curr.next
  }

  //當兩個 link list 長度不一樣
  curr.next = l1 !== null ? l1 : l2

  //最後返回 dummy.next
  return dummy.next
};



mergeTwoLists([1, 100], [3, 4, 6, 8])


//補充
//dummy节点——leetcode链表题必备 : https://blog.csdn.net/qq_37149252/article/details/110893114
