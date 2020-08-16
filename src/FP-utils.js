// 函数式基本原则
// 1. 显式的输入和输出
// 2. 无副作用

// 柯理化 可以逐次传参 参数达到要求才运行
// 实现思路
// 利用闭包来决定继续传参还是立即调用
function curry(fn, count = fn.length) {
    return (function nextCurried(prevArgs) {
        return function curried(nextArg) {
            let args = [...prevArgs, nextArg];
            return args.length >= count ? fn(...args) : nextCurried(args);
        };
    })([]);
}

// 松散柯理化
function curry(fn, arity = fn.length) {
    return (function nextCurried(preArgs) {
        return function curried(...nextArg) {
            let args = [...preArgs, ...nextArg];
            return args.length >= arity ? fn(...args) : nextCurried(args);
        };
    })([]);
}

// 偏函数 固定参数
// 实现思路，将传入参数固定到调用函数中，并返回剩余参数填充接口
// function partial(fn,...presetArgs) {
//   return function partiallyApplied(...laterArgs){
//       return fn( ...presetArgs, ...laterArgs );
//   };
// }

let sum = (a, b) => a + b;

let sum2 = partial(sum, 2);
console.log(sum2(2));
