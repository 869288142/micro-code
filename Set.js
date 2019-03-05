// 无法辨别字符串和数字 因为key都会转换为string类型,导致这两者类型的key会被覆盖,使用其类型进行hash化进行区别
// 暂时没法支持对象存储(无法分辨)
let Set = (function() {
  let items = new WeakMap()
  class Set {
    constructor() {
      items.set(this, {})
    }
    has(v) {
      let o = items.get(this)
      let k = `${typeof v}${v}`
      return Reflect.has(o,k)
    }
    add(v) {
      let o = items.get(this)
      let k = `${typeof v}${v}`
      return this.has(k) ? false : o[k] = v,true
    }
    remove(v) {
      let o = items.get(this)
      let k = `${typeof v}${v}`
      return this.has(k) ? (Reflect.deleteProperty(o, v), true) : false
    }
    clear() {
      let o = items.set(this, {})
    }
    size() {
      let o = items.get(this)
      return Object.keys(o).length
    }
    values() {
      let o = items.get(this)
      let keys = Object.keys(o)
      let vs = keys.map(key => o[key])
      return vs
    }
    print() {
      let o = items.get(this)
      console.log(o)
    }
  }
  return Set
})()

let set = new Set()
set.add(111)
set.add("111")
console.log(set.values())
set.print()