import { CriticalPathTree } from './components/critical-path-tree/criticalPathTree'
import { TaskControl } from './components/task-control/taskControl'
import { TaskForm } from './components/task-form/taskForm'
import { TaskList } from './components/task-list/taskList'

export default function Page() {
  return (
    <main className='flex flex-1'>
      <section className='flex-1 border-r-4 max-w-sm'>
        <TaskControl />
        <div className='p-4 flex flex-col gap-4'>
          <TaskList />
        </div>
      </section>

      <CriticalPathTree />
      <TaskForm />
    </main>
  )
}
