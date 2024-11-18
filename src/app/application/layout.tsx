import type { LayoutChildrenProps } from '../interfaces'
import { UserService } from '../login/services/user-service/userService'
import { Header } from './components/header/header'
import { CriticalPathService } from './services/critical-path-service/criticalPathService'

export default function Layout({ children }: LayoutChildrenProps) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <UserService />
      <CriticalPathService />
      {children}
    </div>
  )
}
