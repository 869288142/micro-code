let Set = (function IIFE() {
  let items = new WeakMap()
  class Set {
    constructor() {
      items.set(this, [])
    }
    has(v) {
      let arr = items.get(this)
      return arr.includes(v)
    }
    add(v) {
      let arr = items.get(this)
      return this.has(v) ? false : arr.push(v), true
    }
    remove(v) {
      let arr = items.get(this)
      let index
      // 处理NaN严格不等于自己
      if (typeof v === 'number') {
        index = arr.findIndex(e => Number.isNaN(e))
      } else {
        index = arr.findIndex(e => e === v)
      }
      return this.has(v) ? (arr.splice(index, 1), true) : false
    }
    clear() {
      items.set(this, [])
    }
    size() {
      let arr = items.get(this)
      return arr.length
    }
    values() {
      let arr = items.get(this)
      return arr
    }
    print() {
      let arr = items.get(this)
      console.log(arr)
    }
  }
  return Set
})()

let set = new Set()
set.add(1)
set.add('1')
set.add(true)
set.add(undefined)
set.add(null)
// 支持NaN
set.add(NaN)
let o = {}
set.add(o)
// set.clear()
// set.add(new Set())
// console.log(set)
console.log(Math[Symbol.toStringTag])
// console.log(String(set))
// set.print()

// let c = {}
// console.log(typeof c.valueOf())
// let s = new Set ([1,2,3, {},undefined,null])
// s.forEach((e, i ,set )=> console.log(e, i ,set))
