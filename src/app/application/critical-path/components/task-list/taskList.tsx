import type { Task } from '@/app/application/components/task/interfaces'
import { TaskView } from '../../../components/task/task'

interface Props {
  tasks: Task[]
}
export function TaskList({ tasks }: Props) {
  return tasks.map(task => (
    <>
      <TaskView
        key={task.id}
        task={task}
      />

      {task.tasks && (
        <TaskList
          key={`${task.id} container`}
          tasks={task.tasks}
        />
      )}
    </>
  ))
}
