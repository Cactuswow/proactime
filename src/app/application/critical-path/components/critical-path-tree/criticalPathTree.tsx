import { mockTasks } from '@/app/application/constants'
import { CriticalPathNode } from '../critical-path-node/criticalPathNode'
import styles from './styles.module.css'

export function CriticalPathTree() {
  return (
    <div className={styles.tree}>
      <CriticalPathNode tasks={mockTasks} />
    </div>
  )
}
