// 对象描述
// 接口，用于描述契约
interface SquareConfig {
    readonly color: string; // 只读属性
    width?: number; //可选属性
}

const obj: SquareConfig = { color: 'black' };

obj.color = 3; // 这里会提示只读不可赋值

// 索引类型
interface StringArray {}
interface StringArrayIndexType {
    [index: number]: any;
    [index: string]: any; // 也可以添加字符索引
}
{
    const myArray: StringArray = ['Bob', 'Fred'];

    const myStr: string = myArray[0]; // 报错，显示无0这个属性
}
{
    const myArray: StringArrayIndexType = ['Bob', 'Fred'];

    const myStr: string = myArray[0]; // 正确
}
