'use client'
import type { User } from '@/app/login/components/login-form/interfaces'
import { useUserService } from '@/app/login/services/user-service/userServiceHook'
import sweetAlert from 'sweetalert2'
import { CollaboratorView } from '../collaborators-view/collaboratorView'

interface Props {
  user: User
}
export function CollaboratorsDelete({ user }: Props) {
  const { deleteUser } = useUserService()
  async function handleDelete() {
    const { isConfirmed } = await sweetAlert.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    })

    if (!isConfirmed) {
      return
    }

    if (await deleteUser(user.id)) {
      sweetAlert.fire({
        title: 'Usuario eliminado',
        icon: 'success'
      })
    } else {
      sweetAlert.fire({
        title: 'Error al eliminar usuario',
        icon: 'error'
      })
    }
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
