let arr = [1, 2, 3, 3]
arr.forEach((e, index, arr) => {
  if(arr.includes(e)){
    arr.splice(index, 1)
    console.log(e)
  }
})
console.log(arr)
console.log(arr)

