'use client'

import Search from '@/../public/search.svg'
import { useUserService } from '@/app/login/services/user-service/userServiceHook'
import type { FormEvent } from 'react'
import Swal from 'sweetalert2'

export function CollaboratorSearch() {
  const { user, addUser } = useUserService()

  if (user.role === 'user') {
    return null
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const id = formData.get('id') as string

    const { isConfirmed } = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Estás seguro de que quieres agregar este colaborador?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, agregar',
      cancelButtonText: 'Cancelar'
    })

    if (!isConfirmed) {
      return
    }

    if (await addUser(id)) {
      Swal.fire({
        title: 'Colaborador agregado',
        text: 'El colaborador se agregó correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })

      return
    }

    Swal.fire({
      title: 'Error',
      text: 'El colaborador no existe',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex justify-between'
    >
      <label className='flex items-center gap-4 text-[var(--gray-200)] border w-1/2 p-3 rounded overflow-hidden'>
        <Search />
        <input
          type='text'
          placeholder='Buscar Colaboradores'
          className='rounded-sm pl-2 outline-none'
          name='id'
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
