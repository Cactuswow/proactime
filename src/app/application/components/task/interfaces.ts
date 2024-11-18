export interface Task {
  id: string
  name: string
  description?: string
  startDate: Date
  endDate: Date
  duration: number
  tasks?: Task[] | number[]
  state: 'normal' | 'critical' | 'warning' | 'completed'
}
