export interface User {
  image: string
  id: number
  name: string
  email: string
  role: 'admin' | 'user'
  password: string
}
