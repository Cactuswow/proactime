export interface Task {
  id: string
  name: string
  description?: string
  startDate: Date
  endDate: Date
  duration: number
  dependency: string
  state: 'normal' | 'critical' | 'warning' | 'completed'
}
