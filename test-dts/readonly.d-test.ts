import { describe } from ".";

describe('readonly', () => {

  describe('字面量 const 断言，会被推断为 readonly 元组类型', () => {
    let point = [3, 4] as const
    // 等同于
    // let point: readonly [3, 4]
  })

  describe('type & interface', () => {
    type Foo = {
      readonly bar: number;
      readonly bas: number
    }

    const foo: Foo = { bar: 1, bas: 2 }
    
    foo.bar = 22  // 报错 readonly定义的字段不能修改
  })


  describe('readonly 与 const 的不同', () => {
    // 1. const 用于变量，readonly 用于属性
    // 2. const 在运行时检查，readonly 在编译时检查
    // 3. const 一旦声明变量，就必须立刻初始化；readonly 能确保自身不能修改属性，但当属性交给其他没有保证的使用者，则能改变

    const foo: { readonly bar: number } = { bar: 123 }

    function iMutateFoo(foo: { bar: number }) {
      foo.bar = 456
    }

    iMutateFoo(foo)
    console.log(foo.bar) // 456  不报错，因为iMutateFoo 里的foo没有保证需要使用 readonly 属性


    type Foo = { readonly bar: 123 }
    function iTakeFoo(foo: Foo) {
      foo.bar = 456 // 报错， bar是只读属性
    }
  })

  describe('在class 中，readonly只能在初始化、constructor构造函数中给readonly修饰的属性赋值', () => {
    
    class Foo {
      readonly bar: number = 1
      readonly baz: string;

      constructor() {
        this.bar = 2
        this.baz = '3'
      }

      const foo = new Foo()
      foo.bar = 2 // 报错，同describe中介绍

    }
  })

  describe('Readonly 一键把所有属性都变成readonly，属于readonly的快捷键', () => {

    type Foo = {
      bar: number,
      bas: number
    }

    // 把 Foo 里的所有 key 变成 readonly
    type FooReadonly = Readonly<Foo>
    const foo: FooReadonly = {
      bar: 1,
      bas: 2
    }

    foo.bar = 2
  })

  describe('ReadonlyArray', () => {
    
    let foo: ReadonlyArray<number> = [1, 2, 3]
    // 等同于
    // let foo: readonly number[] = [1,2,3]

    foo[0] = 22 // error 整个foo的索引全部是readonly

    foo.push(0) // error 不能push，会改变数组

    foo = foo.concat(111) // 可以  因为返回了一个新数组，没有修改之前的

    // -------------------------------------
    let x: readonly string[] = []
    let y: string[] = []

    x = y // ok
    y = x // error 只读类型的string[] 不能分配给可变的 string[]

    // -----------------------------
    // ReadonlyArray 只作为类型使用，不能当成构造函数使用
    new ReadonlyArray("red", "green", "blue");

  })
})