import { describe } from ".";


describe('Union Types[联合类型]', () => {

  describe('联合类型，表示值可能是这些类型中的任意一个', () => {
    let myData: string | number

    myData = 7
    myData = '7'
    myData = false // error 只能取定义里的其中类型
  })

  describe('只能访问共同属性', () => {
    let something: string | number

    describe('访问 length 报错', () => {
      something.length // error  number上获取不到 length 属性，因为只有string有
    })

    describe('访问 .toString', () => {
      something.toString() // 因为 string 和 number 的共同属性
    })
  })


  describe('根据类型推断出类型属性', () => {
    let myData: string | number
    myData = 'seven'
    console.log(myData.length)

    myData = 7
    console.log(myData.length) // 推断出 number 类型了，但是number类型不存在length方法
  })
})