'use client'

import { useCriticalPathService } from '@/app/application/services/critical-path-service/criticalPathServiceHook'
import { CriticalPathNode } from '../critical-path-node/criticalPathNode'
import styles from './styles.module.css'

export function CriticalPathTree() {
  const { tasks } = useCriticalPathService()

  return (
    <div className={styles.tree}>
      <CriticalPathNode tasks={tasks} />
    </div>
  )
}
