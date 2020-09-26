export function unique(arr: any): any {
  const hashMap: Record<string, boolean> = {}
  const hash = (e: any) => `${typeof e}${e}`
  return arr.filter((e: any) => !hashMap[hash(e)] && (hashMap[hash(e)] = true))
}
