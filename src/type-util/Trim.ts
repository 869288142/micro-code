type TrimLeft<V extends string> = V extends ` ${infer U}` ? TrimLeft<U> : V // 你的实现代码
type TrimRight<V extends string> = V extends `${infer U} ` ? TrimRight<U> : V // 你的实现代码
// 测试用例
type c = TrimLeft<TrimRight<' semlinker '>>
//=> 'semlinker'
