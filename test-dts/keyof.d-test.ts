import { describe } from ".";

// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html?#keyof-and-lookup-types
// https://yayujs.com/handbook/KeyofTypeOperator.html#keyof-%E7%B1%BB%E5%9E%8B%E6%93%8D%E4%BD%9C%E7%AC%A6
describe('keyof', () => {
  
  describe('keyof 可以获取一个类型的所有建值', () => {
    type Person = {
      name: string,
      aeg: number
    }
    // PersonKey 得到的类型为 "name" | "age"
    type PersonKey = keyof Person
  })


  describe('确保我们不会获取 obj 上不存在的属性，类型之间建立一个约束', () => {
    type Person = {
      name: string,
      age: number
    }

    function getVal(obj: Person, key: keyof Person) {
      return obj[key]
    }

    const man: Person = {
      name: 'xiaohong',
      age: 20
    }

    getVal(man, 'name')
    getVal(man, 'age')
    getVal(man, 'form') // 报错 因为属性中不存在form
  })

})