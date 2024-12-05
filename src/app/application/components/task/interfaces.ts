export interface Task {
  id: string
  name: string
  description?: string
  startDate: Date
  endDate: Date
  duration: number
  state: 'normal' | 'critical' | 'warning' | 'completed'
  tasks?: Task[]
  dependency: number | undefined
}
