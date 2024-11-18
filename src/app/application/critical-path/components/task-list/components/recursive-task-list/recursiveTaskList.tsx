import type { Task } from '@/app/application/components/task/interfaces'
import { TaskView } from '@/app/application/components/task/task'

interface Props {
  tasks: Task[]
}
export function RecursiveTaskList({ tasks }: Props) {
  return tasks.map(task => (
    <>
      <TaskView
        key={task.id}
        task={task}
      />

      {task.tasks && (
        <RecursiveTaskList
          key={`${task.id} container`}
          tasks={task.tasks}
        />
      )}
    </>
  ))
}
