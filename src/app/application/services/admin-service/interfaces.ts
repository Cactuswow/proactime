import type { Task } from '../../components/task/interfaces'

export interface AdminServiceHook {
  taskManage: 'default' | 'edit' | 'delete' | 'create' | 'select'
  setTaskManage: (
    taskManage: 'default' | 'edit' | 'delete' | 'create' | 'select'
  ) => void
  actualTask: Task | null
  setTask: (task: Task | null) => void
}
