'use client'

import { useEffect } from 'react'
import { userService } from './userService'

export function UserService() {
  const { fetchUser } = userService()

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return null
}
