type Tail<T extends any[]> = ((...args: T) => any) extends (
    arg1: any,
    ...tail: infer A
) => any
    ? A
    : [];
type Prepend<E, T extends any[]> = ((arg: E, ...args: T) => any) extends (
    ...args: infer U
) => any
    ? U
    : T;
type Length<T extends any[]> = T['length'];
type Drop<N extends number, T extends any[], I extends any[] = []> = {
    0: Drop<N, Tail<T>, Prepend<any, I>>;
    1: T;
}[Length<I> extends N ? 1 : 0];
export function partial<T extends (...args: any[]) => any, V extends number>(
    fn: T,
    ...presetArgs: Parameters<T>
): any {
    type returnType = ReturnType<T>;
    return function partialLyApplied(
        ...laterArgs: Drop<1, Parameters<T>>
    ): returnType {
        return fn(...presetArgs, ...laterArgs);
    };
}

const sum = (a: number, b: number) => a + b;

const sum2 = partial(sum, 2);
console.log(sum2(2));
