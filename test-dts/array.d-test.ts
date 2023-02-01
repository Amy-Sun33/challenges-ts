import { describe } from ".";

describe('数组', () => {
  
  describe('类型 + 方括号', () => {
    let items: number[] = [1,2,3]
  })

  describe('泛型表示法', () => {
    let items: Array<number> = [1,2,3]
  })

  describe('用接口表示', () => {
    interface items {
      [index: number]: number
    }

    const items: items = [1,2,3]
  })
})