// type TupleToObject<T extends readonly any[]> = {
//   [P in T[number]]: P
// }

// 解决case中的@ts-expect-error报红问题，因为对象的键只能是string number symbol
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}