import { create } from 'zustand'
import type { UserService } from './interfaces'

export const useUserService = create<UserService>((set, get) => ({
  user: {} as UserService['user'],
  users: [],
  fetchUser: async () => {
    const response = await fetch('/api/users')
    const users = await response.json()
    set({ users })
  },
  login: async (email: string, password: string) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const user = await response.json()
      set({ user })

      return true
    } catch {
      return false
    }
  },
  deleteUser: (id: number) => {
    const { users } = get()
    const newUsers = users.filter(user => user.id !== id)
    set({ users: newUsers })
  }
}))
