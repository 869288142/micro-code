const { hasOwnProperty } = Object.prototype
export const hasOwn = (val: Record<string, unknown>, key: string | symbol): key is keyof typeof val =>
  hasOwnProperty.call(val, key)

const obj = {a: 3}
