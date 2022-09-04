// function domainName(url) {
//   //your code here
//   const re1 = new RegExp("^(http|https)://www", "ig")
//   const re2 = new RegExp("^(http|https)://", "ig")
//   const booleanOfRe1 = re1.test(url)
//   const booleanOfRe2 = re2.test(url)
//   console.log(booleanOfRe2)


//   let result = ''
//   if (booleanOfRe1 == true) {

//     result = String(url.split(".")[1])
//   } else if (booleanOfRe2 == true) {
//     console.log(url.split("."))
//     result = String(url.split(".")[1])
//   }
//   // console.log('test:', re2.test(url), booleanOfRe2)
//   console.log('result', result)
// }


// url = "http://github.com/carbonfive/raygun"
domainName("http://github.com/carbonfive/raygun")
// domainName("http://www.zombie-bites.com")



// Solution 1 gsub to replace XDDD
function domainName(url) {
  return url.replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split('.')[0];

}
function domainName(url) {
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

//使用正則
function domainName(url) {
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}
function domainName(url) {
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
