import { describe } from ".";


// https://yayujs.com/handbook/MappedTypes.html#%E6%98%A0%E5%B0%84%E7%B1%BB%E5%9E%8B-mapped-types
describe('in', () => {

  describe('in 只能用在类型的定义中， 对枚举类型循环遍历', () => {
    // keyof 返回泛型 T 的所有健枚举类型
    // P 是自定义的任何变量名
    // in 连接，相当于js中的 in 遍历
    // 外围用[]包裹，[P in T]为固定搭配
    // 冒号右侧，表示对应的key设置为指定的类型
    type TypeToNumber<T> = {
      [P in keyof T]: number
    }

    type Person = {
      name: string,
      age: number
    }

    let man: TypeToNumber<Person> = {
      name: "123" // 报错 映射之后值必须是 number 类型
    }
  })
})