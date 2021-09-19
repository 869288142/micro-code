type EmptyObject = {
  [key: string]: never
}

// 测试用例
const shouldPass: EmptyObject = {}; // 可以正常赋值
const shouldFail: EmptyObject = { // 将出现编译错误
  prop: 'TS'
}
