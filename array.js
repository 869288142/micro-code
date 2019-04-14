/**
 * @param  {Array} arr
 */
let arr = [1, 2, 3]
function sum(arr) {
  let sum = 0
  // // 方案1 loop
  // for(let i = 0; i < arr.length; i++) {
  //   sum += arr[i]
  // }
  // 方案2  reduce
  sum = arr.reduce((total, next) => total + next, 0)
  return sum
}

console.log(sum(arr))