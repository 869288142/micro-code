/**
 * 查询参数转化queryMap
 * @param paramsStr 查询参数字符串
 * @returns queryMap
 */
export function querystring(paramsStr: string): Record<string, any> {
  const paramsKV = paramsStr.split('&')
  const map = Object.create(null)
  paramsKV.forEach((e) => {
    const [k, v] = e.split('=')
    !map[k] ? (map[k] = v) : Array.isArray(map[k]) ? (map[k] = [v, ...map[k]]) : (map[k] = [v, map[k]])
  })
  return map
}
