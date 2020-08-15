// 删除数组中指定项
function remove (arr, item) {
  if (arr.length) {
    let index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

// 乱序
function shuffle(arr) {
  let randomIndex, i
  for (i = arr.length; i; i--) {
    // 生成j范围为 [0,i)，然后向下取整
    randomIndex = Math.floor(Math.random() * i)
    ;[arr[i-1], arr[randomIndex]] = [arr[randomIndex], arr[i-1]]
  }
  return arr
}

// 去重
function unique(arr) {
  let hashMap = {}
  let hash = e => `${typeof e}${e}`
  return arr.filter(e =>
    !hashMap[hash(e)] && (hashMap[hash(e)] = e)
  )
}