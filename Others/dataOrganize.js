function getMemberList() {
  return [
    {
      name: 'Toyz',
      id: '2',
    },
    {
      name: 'Tommy',
      id: '1',
    },
    {
      name: 'Mask',
      id: '3',
    },
  ]
}
function getPrizeList() {
  return [
    {
      prize: 'NO.1',
      id: '3',
    },
    {
      prize: 'NO.2',
      id: '2',
    },
    {
      prize: 'NO.3',
      id: '1',
    }
  ]
}
function getPrizeInfo(id) {
  return {
    info: {
      prizeInfo: `The prize is about ... ${id} .....`,
    }
  }
}

const members = getMemberList();
const prize = getPrizeList();

const hashMap = {};

//使用 entry
//是直接取得所有 property 的 name 和 value，並以陣列回傳。
for (let [index, member] of members.entries()) {
  console.log(index, member);
  //有瞭個物件
  const memberId = member.id;
  const prizeId = prize[index].id;
  //先製作 member與Info
  if (!hashMap[memberId]) {
    hashMap[memberId] = {
      ...member,
      ...getPrizeInfo(memberId)
    }
  } else {
    hashMap[memberId] = {
      ...hashMap[memberId],
      ...member
    }
  }

  //製作 prize
  if (!hashMap[prizeId]) {
    hashMap[prizeId] = {
      ...prize[index],
      ...getPrizeInfo(prizeId)
    }
  } else {
    hashMap[prizeId] = {
      ...hashMap[prizeId],
      ...prize[index],
    }
  }

}

console.log('End:', JSON.stringify(Object.values(hashMap)))

// document.getElementById('answer').textContent = JSON.stringify(Object.values(hashMap), undefined, 2)
//https://jsfiddle.net/m3qeaku6/3/
