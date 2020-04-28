let urlParams = 'name=whitemu&sex=man&sex=women&e'
// 解析URL参数为对象

// 思路，先用&分割键值对，然后用=分割键和值，进行拼装

function querystring(paramsStr) {
  let paramsKV = paramsStr.split('&')
  let map = Object.create(null)
  paramsKV.forEach(e => {
    let [k, v] = e.split('=')
    !map[k]
      ? (map[k] = v)
      : Array.isArray(map[k])
        ? (map[k] = [v, ...map[k]])
        : (map[k] = [v, map[k]])
  })
  return map
}

console.log(querystring(urlParams))
