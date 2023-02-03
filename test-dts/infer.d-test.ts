import { describe } from ".";

// https://blog.csdn.net/qq_36380426/article/details/124791356
describe('infer', () => {

  describe('infer 类型推断，相当于一个占位符', () => {
    type InferFirst<T extends unknown[]> = T extends [infer P, ...infer _] ? P : never
  })

  describe('infer 只能在条件类型的 extends 子句中使用', () => {
    type inferArray<T> = T extends (infer U)[] ? U : never
  })

  describe('infer 只能在true语句中使用，即X中使用', () => {
    T extends U ? X : Y
  })
})