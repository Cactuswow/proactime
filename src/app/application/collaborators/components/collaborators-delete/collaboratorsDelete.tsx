import type { User } from '@/app/login/components/login-form/interfaces'
import { CollaboratorView } from '../collaborators-view/collaboratorView'

interface Props {
  user: User
}
export function CollaboratorsDelete({ user }: Props) {
  return (
    <div className='flex'>
      <div className='flex-1'>
        <CollaboratorView user={user} />
      </div>
      <button
        type='submit'
        className='bg-[var(--sweet-pink-300)] w-40 rounded-sm p-2'
      >
        Eliminar
      </button>
    </div>
  )
}
