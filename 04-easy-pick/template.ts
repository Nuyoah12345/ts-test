// extends 约束K必须在 keyof T 中
// keyof 用来遍历 T
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}