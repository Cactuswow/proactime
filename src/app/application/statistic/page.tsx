import { mockTasks } from '../constants'
import { TaskList } from '../critical-path/components/task-list/taskList'
import { Calendar } from './components/calendar/calendar'
import { months } from './components/calendar/constants'

export default function Page() {
  const date = new Date()

  return (
    <main className='flex flex-1'>
      <div className='flex flex-1'>a</div>
      <div className='flex flex-col gap-3 flex-1 p-2 max-w-sm border-l-2'>
        <p>
          Calendario ({months[date.getMonth()]} {date.getFullYear()})
        </p>
        <Calendar />
        <TaskList tasks={mockTasks} />
      </div>
    </main>
  )
}
