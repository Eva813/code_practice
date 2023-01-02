let sum = (...n) => {
  if (n.length == 2) {
    return n[0] + n[1]
  } else {

    return (m) => {
      console.log(m)
      return n[0] + m
    }
  }

}


//sum2: https://stackoverflow.com/questions/42952425/how-to-write-a-function-where-the-output-for-both-sum2-3-and-sum23-wil
function sum2(a) {
  console.log(Object.keys(arguments))
  if (arguments.length == 1) {
    return function (b) {
      return a + b;
    }
  } else {

    return Object.keys(arguments).reduce((a, b) => arguments[a] + arguments[b]);
  }
}
//console.log(a, b) => 0,1

// console.log(sum2(2, 3));
console.log(sum2(2)(3));


// console.log(sum(2, 3));
// console.log(sum(2)(3));
//closure 概念？
//介紹 Functional Programming 重要的概念，Curry.

//https://blog.csdn.net/qq_43201542/article/details/87340755
//https://www.youtube.com/watch?v=4EuziAWFFSI&t=679s
//有更多參數：https://ewind.us/2016/sum-to-curry/


//1===true  false
//you need to understand The DataType,
//true → data type is Boolean
//1 → data type is Number

//NaN==NaN false
//1==true true  (== check only equality in value,value is same so it return true.)
//https://www.quora.com/Why-is-true-1-true-but-true-1-is-false-in-JavaScript


const promiseFn = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (num) resolve('success')
    else reject(new Error('fail'))
  }, 3000)

})
promiseFn(1).then((value) => {
  console.log(value)
}).catch((error) => {
  console.log(error)
})
