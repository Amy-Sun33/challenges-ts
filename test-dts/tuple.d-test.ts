import { describe } from ".";

describe('元祖（tuple），当明确知道数组包含的元素，并且每个位置的元素类型都明确的时候', () => {
  type StringNumberPair = [string, number];

  const str: StringNumberPair = ['123', 123]
  type t = StringNumberPair['length'] // t = 2, 因为tuple是个定值，所以能取出对应的length


  type stringArr = string[]
  type t2 = stringArr['length']  // t2 = number, 
})