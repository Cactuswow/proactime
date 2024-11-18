'use client'

import { useEffect } from 'react'
import { useUserService } from './userServiceHook'

export function UserService() {
  const { fetchUser } = useUserService()

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return null
}
