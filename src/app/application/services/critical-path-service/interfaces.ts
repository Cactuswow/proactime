import type { Task } from '../../components/task/interfaces'

export interface CriticalPathService {
  tasks: Task[]
  fetchTasks: () => Promise<void>
  addTask: (task: Task) => Promise<void>
  deleteTask: (id: string) => Promise<void>
  updateTask: (task: Task) => Promise<void>
}
