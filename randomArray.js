// 数组乱序 
// 思路：打乱原先的下标
let values = [1, 2, 3, 4, 5]

// 非均匀乱序

let shuffle = (arr) => arr.sort(() => Math.random() - 0.5);


// 均匀乱序
// function shuffle(arr) {
//   let randomIndex, i
//   // tmp,i
//   // i--提高loop性能 中间的i会隐式转换为boolean
//   for (i = arr.length; i; i--) {
//     // 生成j范围为 [0,i)，然后向下取整
//     randomIndex = Math.floor(Math.random() * i)
//     // 将生成i j的两个元素交换位置
//     // tmp = arr[i - 1]
//     // arr[i - 1] = arr[randomIndex]
//     // arr[randomIndex] = tmp

//     ;[arr[i-1], arr[randomIndex]] = [arr[randomIndex], arr[i-1]]
//   }
//   return arr
// }

console.log(shuffle(values))
