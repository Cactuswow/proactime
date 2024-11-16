import { Calendar } from './components/calendar/calendar'

export default function Page() {
  return (
    <main className='flex flex-1'>
      <div className='flex flex-1'>a</div>
      <div className='flex flex-col gap-3 flex-1 p-2 max-w-md border-l-2'>
        <p>Calendario</p>
        <Calendar />
      </div>
    </main>
  )
}
