type MyExclude<T, K> = T extends K ? never : T


type u = 'a' | 'b' | 'c'
type a = Exclude<u, 'a'>

type b = Exclude<string | number | (() => void), Function>
// type c = typeof (()=>void)