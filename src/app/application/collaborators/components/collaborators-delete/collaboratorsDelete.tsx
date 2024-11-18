import { mockUsers } from '@/app/login/components/login-form/constants'
import { CollaboratorView } from '../collaborators-view/collaboratorView'

export function CollaboratorsDelete() {
  return (
    <div className='flex'>
      <div className='flex-1'>
        <CollaboratorView user={mockUsers[0]} />
      </div>
      <button
        type='submit'
        className='bg-[var(--sweet-pink-300)] w-40 rounded-sm p-2'>
        Eliminar
      </button>
    </div>
  )
}
