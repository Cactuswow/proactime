import type { LayoutChildrenProps } from '../constants'
import { Header } from './components/header/header'

export default function Layout({ children }: LayoutChildrenProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
