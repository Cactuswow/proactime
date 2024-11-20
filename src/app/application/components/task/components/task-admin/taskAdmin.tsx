'use client'
import { useAdminService } from '@/app/application/services/admin-service/adminServiceHook'
import { useCriticalPathService } from '@/app/application/services/critical-path-service/criticalPathServiceHook'
import type { Task } from '../../interfaces'
import { TaskView } from '../../task'

interface Props {
  task: Task
}
export function TaskAdmin({ task }: Props) {
  const { taskManage } = useAdminService()
  const { deleteTask } = useCriticalPathService()

  function handleTask() {
    if (taskManage === 'edit') {
      return
    }

    if (taskManage === 'delete') {
      deleteTask(task.id)
    }
  }

  return (
    <div onClick={handleTask}>
      <TaskView task={task} />
    </div>
  )
}
