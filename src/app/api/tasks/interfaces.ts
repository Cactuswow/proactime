export interface RawTask {
  id: number
  name: string
  description?: string
  startDate: Date
  endDate: Date
  duration: string
  dependency?: number
  state: 'normal' | 'critical' | 'warning' | 'completed'
}
