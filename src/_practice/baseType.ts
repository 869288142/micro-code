// 基本类型
// 基础语法
// var : type
// undefined
{
  const u = undefined
  //const u: nudefined = undefined;
}
// null
{
  const n = null
  //const n: null = undefined;
}
// string
{
  const str = ''
  //const str: string = '';
}
// number
{
  const num = 1
  //const num: number = '';
}
// boolean
{
  const bol = false
  // const bol: boolean = false
}

// --strictNullChecks 开启空指针检查，不让null 和 undefined赋值给其他类型

// 特殊值类型
// any,表示类型不确定，完全脱离类型检查
{
  const noSure: any = 4
}

// unknown,在具体操作时，需要收窄类型，更加安全,比如下面的
{
  const noSure: unknown = 4
  // 错误
  noSure.toFixed
  // 正常
  if (typeof noSure === 'number') {
    noSure.toFixed
  }
}

// 函数返回值类型
// void,表示无返回值
function fVoid(): void {}

// never 用于抛出异常的或者根本没有返回值的函数返回值类型
function error(message: string): never {
  throw new Error(message)
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}

// 枚举，更好地管理常量类型
enum Color {
  Red,
  Green,
  Blue,
}
