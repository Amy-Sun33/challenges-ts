import { describe } from ".";

describe('类型别名[type] & 接口[interface] 定义方式', () => {
  // 用于声明类型， 二者最关键的差别在于 类型别名(type) 本身无法添加新属性，而 接口(interface) 是可以扩展的
  // 接口(interface) 被用于声明对象的形状，不能重命名原始类型

  type Point0 = {
    x: number,
    y: number
  }

  interface Point1 {
    x: number,
    y: number
  }
})


describe('扩展类型', () => {

  describe('通过继承扩展类型', () => {

    interface Animal0 {
      name: string
    }
  
    interface Bear extends Animal0 {
      honey: boolean
    }
  })
  

  describe('通过 ‘&’ 扩展', () => {

    type Animal = {
      name: string
    }
  
    type Bear = Animal & {
      honey: boolean
    }

  })
})

describe('对已存在的接口添加新字段', () => {

  describe('interface', () => {

    interface Window {
      title: string
    }

    interface Window {
      age: number
    }

  })

  describe('type', () => {

    type Window = { 
      title: string
    }

    type Window = {
      age: number
    }

    // error 标识符“Window”重复
  })

})

