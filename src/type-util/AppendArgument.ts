type Fn = (a: number, b: string) => number
type AppendArgument<F extends (...args: any[]) => any, A> = (x: A, ...args: Parameters<F>) => ReturnType<F> // 你的实现代码

type FinalFn = AppendArgument<Fn, boolean>
