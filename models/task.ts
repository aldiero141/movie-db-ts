export interface ITask {
  text: string
  status: string
  removable: boolean
}

// Mapped type for changing type from required to optional
type options = {
  name: string
  id: number
}
type Optional<T> = {
  [x in keyof T]+?: T[x]
}
function generate(options: Optional<options>) {
  options.id
}
