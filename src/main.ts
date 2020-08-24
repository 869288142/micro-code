import { memoize } from 'lodash/fp';
// export function partial<T extends (...args: any[]) => any>(
//     fn: T,
//     ...presetArgs: any[]
// ): T {
//     return function partialLyApplied(...laterArgs: any[]): ReturnType<T> {
//         return fn(...presetArgs, ...laterArgs);
//     };
// }

// const sum = (a: number, b: number) => a + b;

// const sum2 = partial(sum);
// console.log(sum2());
