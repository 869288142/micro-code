type NonEmptyArray = [any, ...any[]];// 你的实现代

type Head<T extends any[]> = T extends NonEmptyArray ? T[0] : never
// 测试用例
type H0 = Head<[]> // never
type H1 = Head<[1]> // 1
type H2 = Head<[3, 2]> // 3
