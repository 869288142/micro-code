// 数组去重
// 思路 每一个元素都去跟它之外的元素比较一次，如果没有找到相同元素就把自己放到新数组
// 优化 从一个方向开始与这个方向前的元素开始比较即可


// function unique(arr) {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     let curE = arr[i]
//     let eIndex = -1
//     for (let j = i + 1; j < arr.length ; j++) {
//       if (curE === arr[j]) {
//         eIndex = j
//         break
//       }
//     }
//     !~eIndex && result.push(curE)
//   }
//   return result
// }

// hash  方式  

// function unique(arr) {
//   let hashMap = {}
//   let hash = e => `${typeof e}${e}`
//   return arr.filter(e =>
//     !hashMap[hash(e)] && (hashMap[hash(e)] = e)
//   )
// }

// 现代API优化版 过滤到相同元素个数不为1的情况

// function unique(arr) {
//   return arr.filter((e, index, arr) => arr.indexOf(e) === index)
// }

// 排序后检测相邻的元素不相同,利用reduce合并相邻结果来处理

// function unique(arr) {
//   return [...arr]
//     .sort()
//     .reduce(
//       (init, cur) => (init[init.length - 1] !== cur && init.push(cur), init),
//       []
//     )
// }



// ES6语法 
// var unique = (arr) => Array.from(new Set(arr))

let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4, '1']

console.log(unique(arr))
