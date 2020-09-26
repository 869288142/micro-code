export function get(obj: any, path: string, defaultValue?: any): any {
  return path.split('.').reduce((a, c) => (a && a[c] ? a[c] : defaultValue || null), obj)
}
const object = { a: [{ b: { c: 3 } }] }
get(object, 'a.0.b.c')
