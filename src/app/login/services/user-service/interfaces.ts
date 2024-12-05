import type { User } from '../../components/login-form/interfaces'

export interface UserService {
  user: User
  users: User[]
  fetchUser: () => Promise<void>
  login: (email: string, password: string) => Promise<boolean>
  deleteUser: (id: number) => Promise<boolean>
  addUser: (id: string) => Promise<boolean>
}
