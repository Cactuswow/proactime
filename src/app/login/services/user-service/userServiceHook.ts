import { create } from 'zustand'
import { User } from '../../components/login-form/interfaces'
import type { UserService } from './interfaces'

export const useUserService = create<UserService>((set, get) => ({
  user: {} as UserService['user'],
  users: [],
  fetchUser: async () => {
    const response = await fetch('/api/users')
    const users = await response.json()
    console.log(users)
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
  deleteUser: async (id: number) => {
    const { users } = get()
    try {
      await fetch(`/api/users/${id}`, {
        method: 'DELETE'
      })
      const newUsers = users.filter(user => user.id !== id)
      set({ users: newUsers })
      return true
    } catch {
      return false
    }
  },
  addUser: async (id: string) => {
    const { fetchUser } = get()
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: 'POST'
      })
      await response.json()

      fetchUser()
      return true
    } catch {
      return false
    }
  }
}))
