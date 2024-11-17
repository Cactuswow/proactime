import { create } from 'zustand'
import type { UserService } from './interfaces'

export const userService = create<UserService>(set => ({
  user: {} as UserService['user'],
  users: [],
  fetchUser: async () => {
    const response = await fetch('/api/users')
    const users = await response.json()
    set({ users })
  },
  loginService: async (email: string, password: string) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    const user = await response.json()
    set({ user })
  }
}))
