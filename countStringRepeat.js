function getRepeatStringCount(str) {
  let map = new Map()
  let strArr = [...str]
  strArr.forEach(e => {
    map.has(e) ? map.set(e, map.get(e) + 1) : map.set(e, 1)
  })
  return map
}

function getMaxCountChar(str) {
  let strCountMap = getRepeatStringCount(str)
  console.log(strCountMap)
  let curChar = ""
  let curCount = 0
  strCountMap.forEach((v, k) => {
    v > curCount && (curChar = k, curCount = v)
  })
  return curChar
}

let str = "1111232323"

console.log(getMaxCountChar(str))
