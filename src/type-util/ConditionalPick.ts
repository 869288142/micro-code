type ConditionalPick<T, C> = {
  [P in keyof T]: T[P] extends C ? P : never
}[keyof T]

interface Example {
  a: string
  b: string | number
  c: () => void
  d: {}
}

// 测试用例：
type StringKeysOnly = ConditionalPick<Example, string>
