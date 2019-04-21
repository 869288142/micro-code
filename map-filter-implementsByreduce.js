// 利用ruduce实现map
function map (arr, mapper) {
  return arr.reduce((list, cur, index, arr) => {
    return list.push(mapper(cur, index, arr)), list
  }, [])
}

// 利用reduce实现filter
function filter(arr, filterFn) {
  return arr.reduce((list, cur, index, arr) => {
    return filterFn(cur, index, arr) && list.push(cur) , list
  }, [])
}