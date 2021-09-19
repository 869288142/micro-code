type Tail<T extends any[]> = ((...args: T) => any) extends (arg1: any, ...tail: infer A) => any ? A : []

// 测试用例
type T0 = Tail<[]> // []
type T1 = Tail<[1, 2]> // [2]
type T2 = Tail<[1, 2, 3, 4, 5]> // [2, 3, 4, 5]
