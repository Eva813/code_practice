//將一個排序好的陣列轉成二元樹
// 左右子數高度差不能超過 1，可以有空節點

//要有一個 root
//https://www.youtube.com/watch?v=_Vo3cQ2xtqk
//https://www.youtube.com/watch?v=VVSnM5DGvjg


//nums.length 不能 減1
var sortedArrayToBST = function (nums) {
  //用 index 取的陣列 value
  return traveler(nums, 0, nums.length)
};

//區分三個 start為起點,end為終點
//若start >= end 表示無法 loop
var traveler = function (temp, start, end) {
  if (start >= end)
    return null
  else {
    //拿出終點的點作為root
    //start+(end-start)/2
    var mid = Math.floor((start + end) / 2);
    //建立 tree
    var result = new TreeNode(temp[mid]);
    result.left = traveler(temp, start, mid)
    result.right = traveler(temp, mid + 1, end)
    return result;
  }
};

sortedArrayToBST([-10, -3, 0, 5, 9])




//////https://dev.to/akhilpokle/converting-a-sorted-array-to-binary-search-tree-in-javascript-om
var sortedArrayToBST = function (nums) {
  return traverse(nums, 0, nums.length - 1); // recursively parse through array
};

function traverse(nums, start, end) {
  if (start > end) {                        // if start>end means left tree or right subtree is not possible so return null
    return null;
  }
  let mid = Math.floor((start + end) / 2);       // get the mid index
  let root = new TreeNode(nums[mid]);        // make a new node
  root.left = traverse(nums, start, mid - 1);    // now recursively generate left subtree
  root.right = traverse(nums, mid + 1, end);     // similarly generate right subtree
  return root;                               // return the root
}
