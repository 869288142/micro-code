export function isUndefined(val: unknown): val is undefined {
  return typeof val === 'undefined'
}

export function isNull(val: unknown): val is null {
  return typeof val === 'object' && !val
}

export function isNumber(val: unknown): val is number {
  return typeof val === 'number'
}
export const isNaN = (val: unknown): val is number => Number.isNaN(val)

export function isBoolean(val: unknown): val is boolean {
  return typeof val === 'boolean'
}

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isArray = (val: unknown): val is Array<any> => Array.isArray(val)

export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'

export const isObject = (val: unknown): val is Record<any, any> => val !== null && typeof val === 'object'

// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (val: unknown): val is Function => typeof val === 'function'

export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

export const objectToString = Object.prototype.toString
export const toTypeString = (value: unknown): string => objectToString.call(value)

export function toRawType(value: unknown): string {
  return toTypeString(value).slice(8, -1)
}

export const isPlainObject = (val: unknown): val is Record<string, unknown> => toTypeString(val) === '[object Object]'

function cacheStringFunction<T extends (str: string) => string>(fn: T): T {
  const cache: Record<string, string> = Object.create(null)
  return ((str: string) => {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }) as any
}
const camelizeRE = /-(\w)/g

export const camelize = cacheStringFunction((str: string): string => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
})

export const capitalize = cacheStringFunction((str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
})

function test (a: string, b: string, c: string, d: string,) : string {
  return a + b + c + d
}
