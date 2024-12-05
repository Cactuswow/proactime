'use client'
import { TaskAdmin } from '@/app/application/components/task/components/task-admin/taskAdmin'
import type { Task } from '@/app/application/components/task/interfaces'
import { TaskView } from '@/app/application/components/task/task'
import { useUserService } from '@/app/login/services/user-service/userServiceHook'

interface Props {
  tasks: Task[]
}
export function RecursiveTaskList({ tasks }: Props) {
  const { user } = useUserService()

  return tasks.map(task => (
    <>
      {user.role === 'user' ? (
        <TaskView
          key={task.id}
          task={task}
        />
      ) : (
        <TaskAdmin
          task={task}
          key={task.id}
        />
      )}

      {task.tasks && (
        <RecursiveTaskList
          key={`${task.id} container`}
          tasks={task.tasks}
        />
      )}
    </>
  ))
}
