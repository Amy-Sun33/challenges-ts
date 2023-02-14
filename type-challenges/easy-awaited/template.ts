type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : T


type Thenable<T> = T extends { then: (onfulfilled: (arg: infer X) => any) => any } ? X : never

// 1. infer