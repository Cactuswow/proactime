import { getTaskTime } from './constants'
import type { Task } from './interfaces'
import styles from './styles.module.css'

interface Props {
  task: Task
}
export function TaskView({ task }: Props) {
  const taskDuration = getTaskTime(task.duration)

  return (
    <div className={styles.taskView}>
      <p className={styles.container}>{task.name.substring(0, 20)}...</p>

      <div
        className={`${styles.container} ${styles.time} ${styles[task.state]}`}
      >
        <p>{taskDuration}</p>
        <span className={`${styles.triangle} ${styles[task.state]}`} />
      </div>
    </div>
  )
}
