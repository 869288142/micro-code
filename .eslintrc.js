/* eslint-disable */
module.exports = {
  root: true,
  // 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量
  env: {
    browser: true, // 浏览器环境中的全局变量
    es2020: true, // 启用除了 modules 以外的所有 ECMAScript 6 特性
    commonjs: true, // CommonJS 全局变量和 CommonJS 作用域 (用于 Browserify/WebPack 打包的只在浏览器中运行的代码)
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11, // 指定你想要使用的 ECMAScript 版本
    sourceType: 'module', // 如果你的代码是 ECMAScript 模块， 设置为 module
  },
  // 指出你要使用的全局变量。将变量设置为 true 将允许变量被重写，或 false 将不允许被重写
  globals: {},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    /**
     * style
     */

    // 方括号里不要加空格
    'array-bracket-spacing': ['error', 'never'],

    // 在左花括号和同一行上的下一个 token 之间要求使用一个或多个空格
    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': ['error', 'always'],

    // 大括号风格要求
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // 在逗号前后使用一致的空格
    'comma-spacing': ['error', { before: false, after: true }],

    // 计算属性空格
    'computed-property-spacing': ['error', 'never'],

    // 禁止在函数名和开括号之间有空格
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    // 对象字面量的键和值之间使用一致的空格
    'key-spacing': [
      'error',
      {
        beforeColon: false, // 禁止在对象字面量的键和冒号之间存在空格
        afterColon: true, // 要求在对象字面量的冒号和值之间存在至少有一个空格
        mode: 'strict', // 强制在冒号前后只有一个空格
      },
    ],

    // 关键字空格
    'keyword-spacing': ['error', { before: true, after: true }],

    // 连续空行数
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],

    // 禁止块内填充
    'padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }],

    // 要求尽可能地使用单引号，允许字符串使用单引号或双引号，只要字符串中包含了一个其它引号，否则需要转义
    quotes: ['error', 'single', { avoidEscape: true }],

    // 强制分号前后的空格
    'semi-spacing': ['error', { before: false, after: true }],

    // 强制分号出现在句子末尾
    // https://eslint.org/docs/rules/semi-style
    'semi-style': ['error', 'last'],

    // 强制圆括号内没有空格
    'space-in-parens': ['error', 'never'],

    // 操作符周围有空格
    'space-infix-ops': ['error'],

    // 一元运算符前后空格
    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': ['error', { words: true, nonwords: false }],

    // 禁用行尾空格，不利于diff
    'no-trailing-spaces': 'error',
    /**
     * error
     */

    // 强制“for” 循环中更新子句的计数器朝着正确的方向移动
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'error',

    // 强制在 getter 属性中出现一个 return 语句
    // https://eslint.org/docs/rules/getter-return
    'getter-return': ['error', { allowImplicit: true }],

    // 禁止在循环中出现 await
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'error',

    // 禁止与 -0 进行比较
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',

    // 禁止在条件语句中出现赋值操作符
    'no-cond-assign': ['error', 'always'],

    // 禁止在正则表达式中使用控制字符
    'no-control-regex': 'error',

    // 禁用 debugger
    'no-debugger': 'error',

    // 禁止在 function 定义中出现重复的参数
    'no-dupe-args': 'error',

    // 禁止在对象字面量中出现重复的键
    'no-dupe-keys': 'error',

    // 禁止重复 case 标签
    'no-duplicate-case': 'error',

    // 禁止空块语句，允许出现空的 catch 子句
    'no-empty': ['error', { allowEmptyCatch: true }],

    // 禁止在正则表达式中出现空字符集
    'no-empty-character-class': 'error',

    // 禁止对 catch 子句中的异常重新赋值
    'no-ex-assign': 'error',

    // 禁止不必要的布尔转换
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // 禁止不必要的分号
    'no-extra-semi': 'off',

    // 禁止对 function 声明重新赋值
    'no-func-assign': 'error',

    // 禁止在嵌套的块中出现 function 声明
    'no-inner-declarations': 'error',

    // 禁止在 RegExp 构造函数中出现无效的正则表达式
    'no-invalid-regexp': 'error',

    // 禁止在字符串和注释之外不规则的空白
    'no-irregular-whitespace': 'error',

    // 禁止将 Math、JSON 和 Reflect 对象当作函数进行调用
    'no-obj-calls': 'error',

    // 禁止 Object 实例直接调用 Object.prototype 的内置方法
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': 'error',

    // 禁用稀疏数组
    'no-sparse-arrays': 'error',

    // 禁止在常规字符串中出现模板字面量占位符语法
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // 禁止使用令人困惑的多行表达式
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',

    // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
    'no-unreachable': 'error',

    // 禁止在 finally 语句块中出现控制流语句
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // 禁止对关系运算符的左操作数使用否定操作符
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // 要求使用 isNaN() 检查 NaN
    'use-isnan': 'error',

    // 强制 typeof 表达式与有效的字符串进行比较
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ['error', { requireStringLiterals: true }],

    // 对 JSSDoc 不正确的注释进行警告
    // https://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': [
      'warn',
      {
        // 指定标记：如用 arg 替代 param => { 'arg': 'param' }
        prefer: {},

        // 指定类型
        preferType: {},

        // 需要返回标记
        requireReturn: false,

        // 允许在返回标记中缺少类型
        requireReturnType: false,

        // 指定正则表达式以匹配每个 JSDoc 注释中的描述
        matchDescription: '.+',

        // 允许在返回标记中缺少描述
        requireReturnDescription: true,
      },
    ],

    // 警告在发布之前应该剔除 console 的调用
    'no-console': 'warn',

    // 警告在条件中使用常量表达式
    'no-constant-condition': 'warn',

    /**
     * variables
     */

    // 禁止在定义变量之前就使用了变量
    'no-use-before-define': ['error', { functions: false, classes: true, variables: false }],

    // 警告变量声明与外层作用域的变量同名
    // 'no-shadow': 'warn',

    /**
     * practices
     */
    // 禁止Yoda条件
    yoda: 'error',

    // 禁止不必要的字符连接
    'no-useless-concat': 'error',

    // 禁止无限循环
    'no-unmodified-loop-condition': 'error',

    // 禁止自身比较
    'no-self-compare': 'error',

    // 禁用隐式的eval
    'no-implied-eval': 'error',

    // 禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': 'error',

    // for-in 需要进行 hasOwnProperty 判断
    'guard-for-in': 'error',

    // 禁止多行字符串
    'no-multi-str': 'error',

    // IIFE 强制总是包裹 function 表达式,暂时没必要开启
    // 'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

    // 禁止出现多个空格
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true, // 忽略行尾注释前的多个空格
      },
    ],

    // 当代码块只有一条语句时，允许省略大括号
    curly: ['error', 'multi-line'],

    /**
     * es6
     */
    // 强制箭头函数的箭头前后有空格
    'arrow-spacing': ['error', { before: true, after: true }],

    'arrow-parens': ['error'],

    // 尽可能使用简写属性
    'object-shorthand': ['error', 'always', { avoidQuotes: true }],

    // 剩余参数代替arguments
    'prefer-rest-params': ['error'],

    // 非this改变下禁用apply,使用rest代替
    'prefer-spread': ['error'],

    // 禁止扩展运算符前有单引号
    'rest-spread-spacing': ['error', 'never'],

    // 禁止使用var
    'no-var': ['error'],

    // 优先使用结构
    'prefer-destructuring': ['error'],

    // 优先使用模版字符串
    'prefer-template': ['error'],
  },
  plugins: ['@typescript-eslint', 'jest'],
}
