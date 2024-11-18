'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useUserService } from './userServiceHook'

export function UserService() {
  const { fetchUser, user } = useUserService()
  const router = useRouter()

  useEffect(() => {
    if (!user.id) {
      router.push('/login')
      return
    }

    fetchUser()
  }, [fetchUser, router.push, user.id])

  return null
}
