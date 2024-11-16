import { Body } from './components/body/body'
import { Header } from './components/header/header'

export function Calendar() {
  return (
    <table className='flex flex-col gap-3'>
      <Header />
      <Body />
    </table>
  )
}
