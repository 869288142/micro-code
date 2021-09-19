type POP<T extends any[]> = T extends [...args: infer U, last: any] ? U: never // 你的实现代码

// 测试用例
type a = POP<[1]> // []
type b = POP<[1, 2, 3, 4]> // [1, 2, 3]
