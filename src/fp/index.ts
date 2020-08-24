type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never;
type Tail<T extends any[]> = ((...args: T) => any) extends (
    arg1: any,
    ...tail: infer A
) => any
    ? A
    : [];
type HasTail<T extends any[]> = T extends [] | [any] ? false : true;
// const assertType = <T extends true>() => {};

type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
    ? 1
    : 2
    ? true
    : false;
type Last<T extends any[]> = { 0: Last<Tail<T>>; 1: Head<T> }[HasTail<
    T
> extends true
    ? 0
    : 1];
type Length<T extends any[]> = T['length'];
type Prepend<E, T extends any[]> = ((arg: E, ...args: T) => any) extends (
    ...args: infer U
) => any
    ? U
    : T;

type Drop<N extends number, T extends any[], I extends any[] = []> = {
    0: Drop<N, Tail<T>, Prepend<any, I>>;
    1: T;
}[Length<I> extends N ? 1 : 0];
type Cast<X, Y> = X extends Y ? X : Y;
type CurryV5<P extends any[], R> = <T extends any[]>(
    ...args: Cast<T, Partial<P>>
) => Drop<Length<T>, P> extends [any, ...any[]]
    ? CurryV5<Drop<Length<T>, P> extends infer DT ? Cast<DT, any[]> : never, R>
    : R;
declare function curryV5<P extends any[], R>(
    f: (...args: P) => R
): CurryV5<P, R>;

export function curry5(callback: any) {
    return (...args: any[]) => {
        if (args.length < callback.length) {
            return curry5(callback.bind(null, ...args));
        } else {
            return callback(...args);
        }
    };
}

// 无 ...rest 参数的
const curryCb1 = (a: string, b: number, c: boolean) => a + b + c;
// 有 ...rest 参数的
const curryCb2 = (a: string, b: number, ...c: string[]) => a + b + c;

const curriedCb = curryV5(curryCb1);
const curriedCb2 = curryV5(curryCb2);

// 单个参数调用
const r1 = curriedCb('name');
// 多个参数调用
const r2 = curriedCb('name', 1);
r2();
// ...rest 参数调用
const r3 = curriedCb2('name', 1, 'aaa');

function cache<
    T extends (...args: any) => any,
    R extends (...args: any) => any
>(fn: T, keyFn: R) {
    type fnArgsType = Parameters<T>;
    type fnReturnType = ReturnType<T>;
    const map: Record<string, fnReturnType | ReturnType<R>> = {};
    return function (...args: fnArgsType): fnReturnType {
        const key = typeof keyFn === 'function' ? keyFn(args) : args.join('');
        return map[key] || (map[key] = fn(args));
    };
}

function add2(a: number, b: number): number {
    return a + b;
}
const c = cache(add2, (args) => args);
console.log(c(1, 2));
