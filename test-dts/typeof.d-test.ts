import { describe } from ".";

// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html#handbook-content
describe('typeof 捕获类型', () => {

  describe('typeof 捕获变量的类型', () => {
    let foo = 123
    let bar: typeof foo //  => let bar: number
    bar = "123"  // error 因为typeof foo是number类型 
    bar = 444
  })


  describe('捕获键的名称', () => {
    const colors = {
      red: 'red1',
      blue: 'blue1'
    }

    type Colors = keyof typeof colors
    let color: Colors;
    color = 'red'
    color = 'blue'
    color = 'yellow' // error 因为只能是 red ｜ blue
  })
})