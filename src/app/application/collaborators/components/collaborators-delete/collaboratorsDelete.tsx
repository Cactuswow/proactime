"use client"
import type { User } from '@/app/login/components/login-form/interfaces'
import { CollaboratorView } from '../collaborators-view/collaboratorView'
import { useUserService } from '@/app/login/services/user-service/userServiceHook'

interface Props {
  user: User
}
export function CollaboratorsDelete({ user }: Props) {
  const {deleteUser} = useUserService()
  function handleDelete(){
    deleteUser(user.id)
  }

  return (
    <div className='flex'>
      <div className='flex-1'>
        <CollaboratorView user={user} />
      </div>
      <button
        type='submit'
        className='bg-[var(--sweet-pink-300)] w-40 rounded-sm p-2'
        onClick={handleDelete}
      >
        Eliminar
      </button>
    </div>
  )
}
