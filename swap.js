let a = 3
let b = 4

// 利用中间变量, 不够简明、多变量

// let tmp = a
// a = b
// b = tmp

// 利用 ^
// a ^= b
// b ^= a
// a ^= b

// ES6 不用中间变量还自带声明式 MVP
// function swap(a, b) {
//   return ([a, b] = [b, a])
// }

;[a, b] = [b, a] 

console.log(a, b)
