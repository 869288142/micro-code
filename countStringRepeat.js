function getRepeatStringCount(str) {
  let map = new Map()
  let strArr = [...str]
  strArr.forEach(e => {
    map.has(e) ? map.set(e, map.get(e) + 1) : map.set(e, 1)
  })
  return map
}

let str = '123321111'

console.log(getRepeatStringCount(str))
