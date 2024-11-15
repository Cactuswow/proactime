import type { LayoutChildrenProps } from '../interfaces'
import { Header } from './components/header/header'

export default function Layout({ children }: LayoutChildrenProps) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      {children}
    </div>
  )
}
