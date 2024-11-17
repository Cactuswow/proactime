import type { User } from '../../components/login-form/interfaces'

export interface UserService {
  user: User
  users: User[]
  fetchUser: () => Promise<void>
  loginService: (email: string, password: string) => Promise<void>
}
