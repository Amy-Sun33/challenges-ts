type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

// 测试keyof的结果
// interface Todo {
//   a: string,
//   b: string,
//   meta: {
//     author: string
//   }
// }

// type r = keyof Todo
// const rv: r = 'meta'
