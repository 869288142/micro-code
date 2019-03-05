let Stack = (function IIFE() {
  let items = new WeakMap()
  class Stack {
    constructor() {
      items.set(this, [])
    }
    push(e) {
      let arr = items.get(this)
      arr.push(e)
    }
    pop() {
      let arr = items.get(this)
      return arr.pop()
    }
    peek() {
      let arr = items.get(this)
      return arr[arr.length - 1]
    }
    isEmpty() {
      let arr = items.get(this)
      return arr.length === 0
    }
    clear() {
      items.set(this, [])
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
  return Stack
})()

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(1)
stack.pop(1)
let top = stack.size()
console.log(top)
stack.print()
