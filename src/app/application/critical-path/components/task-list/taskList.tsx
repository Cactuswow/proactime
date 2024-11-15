import type { Task } from '@/app/application/components/task/interfaces'
import { TaskView } from '../../../components/task/task'

interface Props {
  tasks: Task[]
}
export function TaskList({ tasks }: Props) {
  return (
    <div className='flex flex-col gap-4'>
      {tasks.map(task => (
        <>
          <TaskView
            key={task.id}
            task={task}
          />

          {task.tasks && <TaskList tasks={task.tasks} />}
        </>
      ))}
    </div>
  )
}
