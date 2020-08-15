//  如何获取数组中的最值
// 思路： 将每个元素和其他元素比较，比它大就更新最大值
// 优化: 根据一个值和其他值比较.如果当前值比记录值要大,则更新
let arr = [6, 4, 1, 8, 2, 11, 23];

// 原始方法

// function max( arr ) {
//   let [max,] = arr 
//   for(let i = 1; i < arr.length; i++) {
//     let cur = arr[i]
//     // cur > max && (max = cur)
//     max = Math.max(max, cur)
//   }
//   return max
// }

// 排序取值 

// function max (arr) {
//   let [max,] =  [...arr].sort((a, b) => b-a)
//   return max
// }

// 利用Array.toString 来生成参数列表
// let max = (arr) => eval(`Math.max(${arr})`)

// ES5
// function max(arr) {
//   return Math.max.apply(null, arr)
// }

// ES6 
// function max (arr) {
//   return Math.max(...arr)
// }



console.log(max(arr));