
//throttle：将一个函数的调用频率限制在一定阈值内，例如 1s 内一个函数不能被调用两次。
const throttle = (fn, delay) => {
  let last = 0;
  return (...args) => {
    const now = new Date();
    if (now - last < delay) {
      return
    }
    last = now
    return fn(...args)
  }
}

document.getElementById('btn').addEventListener('click', throttle((e) => {
  console.count('click')
}, 2000)
)
