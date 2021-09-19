type Foo = {
  a: number
  b?: string
  c: boolean
}

type Simplify<T> = {
  [P in keyof T]: T[P]
}
// 将可选属性Pick出之后与其他属性进行合并为交叉类型，再使用Simplify重新合并属性

type SetOptional<T, U extends keyof T> = Simplify<Partial<Pick<T, U>> & Omit<T, U>>

// 测试用例
type SomeOptional = SetOptional<Foo, 'a' | 'b'>
