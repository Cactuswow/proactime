'use client'

import { useCriticalPathService } from '@/app/application/services/critical-path-service/criticalPathServiceHook'

import { RecursiveTaskList } from './components/recursive-task-list/recursiveTaskList'

export function TaskList() {
  const { tasks } = useCriticalPathService()
  return <RecursiveTaskList tasks={tasks} />
}
