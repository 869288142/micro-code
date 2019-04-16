// 数组元素查找 
// 思路：遍历所有元素一次，找到符合条件的
// 优化：将查找方法分隔为查找到第一个、查找到最后一个

// 原生方法
// 缺点： 1.仅支持数字 2.返回值为index，不适合用于判断是否存在的情况
// 
let arr =  [12, 5, 8, 130, 12, 44]

// let index = arr.indexOf(12)
// let index = arr.lastIndexOf(12)

// 判断是否存在

// 原始版
// let isExist = (arr, e) => !!~arr.indexOf(e)

// ES6
// 返回boolean 没有抽象泄漏这种情况，但是仍然仅支持数字
// let isExist =(arr, e) => arr.includes(e)

// 找到下标并返回

// 原始的indexOf、lastIndexOf只支持数组

// 高阶函数版的indexOf 
// findIndex

// let findIndex = (arr, predicate) => (arr.filter(predicate), arr )

// console.log(findIndex);