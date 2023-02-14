type If<C extends true, T, F> = C extends true ? T : F

// https://yayujs.com/reference/TypeCompatibility.html#%E5%8F%AF%E9%80%89%E5%8F%82%E6%95%B0%E5%8F%8A%E5%89%A9%E4%BD%99%E5%8F%82%E6%95%B0
// https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability