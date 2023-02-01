import { describe } from ".";

// https://yayujs.com/handbook/Generics.html#%E6%B3%9B%E5%9E%8B%E7%B1%BB-generic-classes
describe('extends', () => {
  // extends 类似于js的 includes
  describe('extends 约束类型的属性', () => {
    
    type Lengthwise = {
      length: number
    }

    function loggingIdent<T extends Lengthwise>(arg: T): T {
      return arg
    }

    loggingIdent(3) // 报错，现在接收的属性是length，没有length则报错

    loggingIdent({length: 10, value: 3})
  })


})