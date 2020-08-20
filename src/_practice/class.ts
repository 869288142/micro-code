// class
class Greeter {
    greeting: string;
    public a?: string; // 未赋值，可选
    private b: string; // 未赋值，必须初始化
    protected readonly c: string; // 只读
    static origin = { x: 0, y: 0 }; // 静态属性
    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return `Hello, ${this.greeting}`;
    }
}
Greeter.origin;
const greeter = new Greeter('world');
//abstract抽象类
abstract class absClass {}
