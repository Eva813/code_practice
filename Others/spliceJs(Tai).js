///台中面試技術考試

let array = ["one", "two", "four"]
//索引位置、要刪除的元素的數量、元素
array.splice(2, 0, "three")

console.log(array)
//['one', 'two', 'three', 'four']

///題目1
const ptd = ["Tom", "Helen", "Brad", "Emily"];
const fae = ["Terry", "Steven", "Olivia", "Tom"];

// 1. Add your name in 'ptd' and (log ptd to the console)
// 2. check if "Maggie" is in the list 'fae' (log result)
// 3. make a new array called 'globalList' that has members of 'ptd' and 'fae' members, with no duplicates (log result)
// 4. in 'globalList', replace 'Steven' with 'Robert' (log globalList)
//找出 indexOf

////


const bikesDefinitions1 = [
  {
    bikeId: 1,
    latestUpdateTimestamp: 1635216996341,
    batteryPartNumber: 1652,
    HMIPartNumber: 1564,
  },
  {
    bikeId: 2,
    latestUpdateTimestamp: 1635216996458,
    batteryPartNumber: 1652,
    HMIPartNumber: 1564,
  },
  {
    bikeId: 3,
    latestUpdateTimestamp: 1635216997458,
    batteryPartNumber: 1652,
    HMIPartNumber: 1564,
  },
];

const bikesDefinitions2 = [
  {
    bikeId: 1,
    latestUpdateTimestamp: 1635216996460,
    batteryPartNumber: 1670,
    HMIPartNumber: 1564,
  },
  {
    bikeId: 3,
    latestUpdateTimestamp: 1635216997320,
    batteryPartNumber: 1200,
    HMIPartNumber: 1385,
  },
  {
    bikeId: 5,
    latestUpdateTimestamp: 1635216996341,
    batteryPartNumber: 1652,
    HMIPartNumber: 1564,
  },
];

const bikesDefinitions3 = [
  {
    bikeId: 2,
    latestUpdateTimestamp: 1635216999999,
    batteryPartNumber: 1956,
    HMIPartNumber: 1564,
  },
  {
    bikeId: 5,
    latestUpdateTimestamp: 1635216996341,
    batteryPartNumber: 1652,
    HMIPartNumber: 1564,
  },
  {
    bikeId: 6,
    latestUpdateTimestamp: 1635216999856,
    batteryPartNumber: 1652,
    HMIPartNumber: 1246,
  },
];
/**
Here you have 3 arrays of objects, each object represents a bike with the parts installed, and the timestamp when this record was saved in the database..
the bikeId property is unique to a bike. That means that if two objects have the same bikeId, it is the same bike.
*/

let allArray = [...bikesDefinitions1, ...bikesDefinitions2, ...bikesDefinitions3]



allArray.sort((a, b) => {
  return a.latestUpdateTimestamp - b.latestUpdateTimestamp
})

const findUniqArr = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    for (let k = 1; k < arr.length; k++) {
      if (arr[i].bikeId === arr[k].bikeId) arr.splice(i, 1)
    }
  }

}

allArray.sort((a, b) => {
  return a.bikeId - b.bikeId
})

/* console.log(allArray) */
findUniqArr(allArray)
console.log(allArray)
// 1. print an array that contains all latest bike definitions, (no duplicates for bikeId), make sure that the list only includes the latest bike definitions for each bikeId (only include the highest timestamp)

// 2. sort the array by most recent

// 3. make it a function that accepts an undefined number of bikes as parameters



/////解法 reduce
let uniqueArr = []
allArray.reduce((list, item) => {
  const foundIndex = list.findIndex(l => l.bikeId === item.bikeId)
  if (foundIndex === -1) {
    list.push(item)
  } else if (list[foundIndex].latestUpdateTimestamp < item.latestUpdateTimestamp) {
    list.splice(foundIndex, 1, item)
  }
  return list
}, uniqueArr)

console.log(uniqueArr)




///////////

const ptd = ["Tom", "Helen", "Brad", "Emily"];
const fae = ["Terry", "Steven", "Olivia", "Tom"];

// 1. Add your name in 'ptd' and (log ptd to the console)
console.log(ptd.push('Eva'))
// 2. check if "Maggie" is in the list 'fae' (log result)
console.log(fae.includes('Maggie'))
// 3. make a new array called 'globalList' that has members of 'ptd' and 'fae' members, with no duplicates (log result)
let newArr = [...ptd, ...fae]
const globalList = [...new Set(newArr)]
console.log(globalList)
// 4. in 'globalList', replace 'Steven' with 'Robert' (log globalList)
let indexOfSteve = globalList.indexOf('Steven');
console.log(indexOfSteve)
globalList[indexOfSteve] = 'Robert';
console.log(globalList);

///
/* let  = globalList.map((item,i)=>{
  console.log(item)
  return item[i] =='Steve' ? 'Robert': item
})
console.log(globalList); */
