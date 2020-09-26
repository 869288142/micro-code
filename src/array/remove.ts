export function remove<T extends unknown[]>(arr: T, item: unknown): unknown[] {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
  return []
}
