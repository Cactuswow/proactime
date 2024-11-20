import type { Task } from '@/app/application/components/task/interfaces'
import { TaskView } from '@/app/application/components/task/task'
import type { CSSProperties } from 'react'
import styles from './styles.module.css'

interface Props {
  tasks: Task[]
}
export function CriticalPathNode({ tasks }: Props) {
  return tasks.map(task => (
    <div
      key={task.id}
      className={styles.node}
      style={
        {
          '--extra-width': `${task.duration * 30}px`
        } as CSSProperties
      }
    >
      <span>
        <TaskView task={task} />
      </span>

      <div>{task.tasks && <CriticalPathNode tasks={task.tasks} />}</div>
    </div>
  ))
}
