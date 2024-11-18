'use client'

import { useUserService } from '@/app/login/services/user-service/userServiceHook'
import { useEffect } from 'react'
import { useCriticalPathService } from './criticalPathServiceHook'

export function CriticalPathService() {
  const { fetchTasks } = useCriticalPathService()
  const { user } = useUserService()

  useEffect(() => {
    if (!user.id) {
      return
    }

    fetchTasks()
  }, [fetchTasks, user.id])

  return null
}
