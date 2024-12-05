import type { RawTask } from '@/app/api/tasks/interfaces'
import type { Task } from '../../components/task/interfaces'

export interface CriticalPathService {
  tasks: Task[]
  fetchTasks: () => Promise<void>
  addTask: (task: RawTask) => Promise<boolean>
  deleteTask: (id: string) => Promise<void>
  updateTask: (task: RawTask) => Promise<boolean>
}
