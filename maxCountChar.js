// 找到字符串中重复次数最多的字符
// 思路：对每个字符分别计数，输出最大值
let str = 'dsfshkgfareasfd'

// function maxCountChar(str) {
//   let map = Object.create(null)
//   for (let i = 0; i < str.length; i++) {
//     let e = str.charAt(i)
//     !map[e] ? (map[e] = 1) : map[e]++
//   }
//   // 过程式
//   // let maxK = ""
//   // let maxV = 0
//   // for(let [k, v] of Object.entries(map)){
//   //   v > maxV && ( maxK = k, maxV = v )
//   // }
//   let mapArr = Object.entries(map)
//   // 声明式
//   mapArr.sort(([, v1], [, v2]) => v2 - v1)
//   let [[maxCountChar]] = mapArr
//   return maxCountChar
// }

// 优化 用正则

function maxCountChar(str) {
  // 先进行排序处理，然后重新组装成字符串
  str = [...str].sort().join('')
  // 利用正则的贪婪匹配来比较相邻的最长字符串
  let reg = /(\w)\1+/g
  let num = 0
  let value = null
  str.replace(reg, ($0, $1) => {
    num < $0.length && ((num = $0.length), (value = $1))
  })
  return value
}

console.log(maxCountChar(str))
