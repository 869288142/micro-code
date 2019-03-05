let Queue = (function IIFE() {
  let items = new WeakMap()
  class Queue {
    constructor() {
      items.set(this, [])
    }
    add(e) {
      let arr = items.get(this)
      arr.push(e)
    }
    remove() {
      let arr = items.get(this)
      return arr.shift()
    }
    front() {
      let arr = items.get(this)
      return arr[0]
    }
    isEmpty() {
      let arr = items.get(this)
      return arr.length === 0
    }
    size() {
      let arr = items.get(this)
      return arr.length
    }
    print() {
      let arr = items.get(this)
      console.log(arr)
    }
  }
  return Queue
})()
