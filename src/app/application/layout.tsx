import type { LayoutChildrenProps } from '../interfaces'
import { Header } from './components/header/header'

export default function Layout({ children }: LayoutChildrenProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
