import { ApplicationView } from '../application-view/applicationView'

export function ApplicationAdminView() {
  return (
    <div className='flex'>
      <div className='flex-1'>
        <ApplicationView />
      </div>

      <div className='flex bg-[var(--jordy-blue-200)] gap-5 p-3 w-32 justify-center'>
        <button type='submit'>E</button>
        <button type='submit'>X</button>
      </div>
    </div>
  )
}
