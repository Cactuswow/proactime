'use client'

import Search from '@/../public/search.svg'
import { useUserService } from '@/app/login/services/user-service/userServiceHook'

export function CollaboratorSearch() {
  const { user } = useUserService()

  if (user.role === 'user') {
    return null
  }

  return (
    <form
      action=''
      className='flex justify-between'
    >
      <label className='flex items-center gap-4 text-[var(--gray-200)] border w-1/2 p-3 rounded overflow-hidden'>
        <Search />
        <input
          type='text'
          placeholder='Buscar Colaboradores'
          className='rounded-sm pl-2 outline-none'
        />
      </label>

      <button
        type='submit'
        className='p-3 px-7 bg-[--jordy-blue-200] rounded'
      >
        Agregar Colaborador
      </button>
    </form>
  )
}
