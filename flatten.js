// 扁平一个数组，很容易知道这个问题是含有子问题,而且终止条件也知道

// 子问题 判断当然操作的是数组还是原生值
// 终止条件 当前值为原始值

// 这里借助reduce来缩减数组
var flatten = function(array) {
  return array.reduce(function(previous, val) {
    //原始值就合并并返回当前数组
    if (Object.prototype.toString.call(val) !== '[object Array]') {
      return previous.push(val), previous
    }
    // 是数组则继续压平
    return Array.prototype.push.apply(previous, flatten(val)), previous
  }, [])
}

// ES6简写版
const flatten = arr =>
  arr.reduce(
    (pre, val) => pre.concat(Array.isArray(val) ? flatten(val) : val),
    []
  )

// 将二维数组视为多叉树，使用非递归DFS遍历

function flat(arr) {
  let stack = []
  let result = []
  stack.push(arr)
  while (stack.length > 0) {
    // 取得数组末端的元素
    let cur = stack.pop()
    // 如果是数组，则继续处理，如果是元素，在放置在结果之中
    if (Array.isArray(cur)) {
      stack.push(...cur)
    } else {
      result.push(cur)
    }
  }
  // 由于非递归的设计是访问子数组的最后一个元素，所以结果是逆序的，需要再次逆序才能得到正确结果
  return result.reverse()
}
