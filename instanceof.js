// instanceof 逻辑
// 验证右边构造函数原型是否在左边对象上的原型链上
function instanceOf(obj, constructorPrototype) {
  let curNode = obj
  while(curNode !== null) {
    curNode = curNode.__proto__ 
    if(curNode === constructorPrototype.prototype) {
      return true
    }
  }
  return false
}

// isPrototypeOf
// 检测两者之间的原型关系
function isPrototypeOf2 (L, R) {
  function F () {}
  F.prototype = R
  return L instanceof F
}

let o = {}
let b = Object.create(o)
let c = Object.create(b)
console.log(isPrototypeOf2(c,o));
