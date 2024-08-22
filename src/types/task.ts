export interface Task {
  id: string
  title: string
  description: string
  completed: boolean
  file?: File | null
}
