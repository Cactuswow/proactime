'use client'
import { useUserService } from '@/app/login/services/user-service/userServiceHook'
import styles from './styles.module.css'

export function TaskForm() {
  const { user } = useUserService()

  if (user.id) {
    return
  }

  return (
    <form className={styles.taskForm}>
      <p className='text-lg mb-3'>Crea o edita una tarea</p>
      <input
        type='text'
        name='name'
        placeholder='* Ingresa un nombre a la tarea'
      />
      <input
        type='text'
        name='description'
        placeholder='Ingresa una descripción'
      />

      <div className='flex gap-4'>
        <input
          type='date'
          name='endDate'
          placeholder='* Ingresa una fecha de fin'
          className='flex-1'
        />
        <input
          type='date'
          name='startDate'
          placeholder='* Ingresa una fecha de inicio'
          className='flex-1'
        />
      </div>

      <input
        type='number'
        name='dependency'
        placeholder='Depende de:'
      />

      <div className='flex gap-4'>
        <button
          className='bg-[var(--moss-green-300)]'
          type='submit'
        >
          Enviar
        </button>
        <button
          className='bg-[var(--sweet-pink-300)]'
          type='button'
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}
