type Undefined<T> = { [P in keyof T]: P extends undefined ? T[P] : never }

type ConditionPickKey<T, Condition> = {
  [Key in keyof T]: T[Key] extends Condition ? Key : never
}

type OptionalKeys<T> = Exclude<keyof T, NonNullable<ConditionPickKey<Undefined<T>, never>[keyof T]>>

interface Something {
  a: undefined
  b: string
  phone?: string
}
type AllOptionalKeys = OptionalKeys<Something> // "phone"
