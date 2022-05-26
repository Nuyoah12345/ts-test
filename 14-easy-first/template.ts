// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
type First<T extends any[]> = T extends [infer Fir, ...infer rest] ? Fir : never


type arr = []
type a = arr[number]

// type b = arr[0] extends arr[number] ? 'true' : 'false'