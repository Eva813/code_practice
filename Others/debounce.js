//https://www.instagram.com/p/CmWd6RkD4eu/
//当调用函数n秒后，才会执行该动作，若在这n秒内又调用该函数则将取消前一次并重新计算执行时间，举个简单的例子，我们要根据用户输入做suggest，每当用户按下键盘的时候都可以取消前一次，并且只关心最后一次输入的时间就行了。
//https://www.webdong.dev/post/learn-debounce-and-throttle/
//https://pjchender.dev/js30/js30-day13/
const debounce = (fn, delay) => {
  let timeoutID;
  return function (...args) {
    if (timeoutID) {
      clearTimeout
    }
    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay)
  }
}
document.getElementById('btn').addEventListener('click', debounce((e) => {
  console.count('click')
}, 1000)
)


function debounce(func, delay) {
  let timer = null;
  return function () {
    if (timer) { clearTimeout(timer) }
    timer = setTimeout(function (...args) {
      func.apply(this, args)
    }.bind(this), delay)
  }
}
//https://www.freecodecamp.org/news/javascript-debounce-example/
//https://ithelp.ithome.com.tw/articles/10195896


/**
 * @param {Function} fn
 * @param {Number} delay
 */
function debounce3(fn, delay = 50) {
  let timer = 0;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

//https://medium.com/@alexian853/debounce-throttle-%E9%82%A3%E4%BA%9B%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC%E6%87%89%E8%A9%B2%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84%E5%B0%8F%E4%BA%8B-%E4%B8%80-76a73a8cbc39
