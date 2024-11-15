import { TaskView } from '../components/task/task'
import { mockTasks } from '../constants'

export default function Page() {
  return (
    <div className='p-10 flex flex-col gap-4'>
      <TaskView task={mockTasks[0]} />
      <TaskView task={mockTasks[1]} />
    </div>
  )
}
