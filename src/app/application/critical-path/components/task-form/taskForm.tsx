'use client'
import type { Task } from '@/app/application/components/task/interfaces'
import { useAdminService } from '@/app/application/services/admin-service/adminServiceHook'
import { useCriticalPathService } from '@/app/application/services/critical-path-service/criticalPathServiceHook'
import type { FormEvent } from 'react'
import sweetAlert from 'sweetalert2'
import styles from './styles.module.css'

export function TaskForm() {
  const { taskManage, actualTask, setTaskManage } = useAdminService()
  const { addTask, updateTask } = useCriticalPathService()

  if (
    taskManage === 'default' ||
    taskManage === 'delete' ||
    taskManage === 'select'
  ) {
    return null
  }

  function cancel() {
    setTaskManage('default')
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    const response = await sweetAlert.fire({
      title:
        taskManage === 'create'
          ? '¿Estás seguro de crear esta tarea?'
          : '¿Estás seguro de editar esta tarea?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    })

    if (!response.isConfirmed) {
      return
    }

    if (taskManage === 'edit') {
      return updateTask({
        id: Number(actualTask?.id) ?? 0,
        name: data.name as string,
        description: data.description as string,
        startDate: new Date(data.startDate as string),
        endDate: new Date(data.endDate as string),
        state: data.state as Task['state'],
        dependency: data.dependency ? Number(data.dependency) : undefined,
        duration: `${
          new Date(data.endDate as string).getTime() -
          new Date(data.startDate as string).getTime()
        }`
      })
    }

    addTask({
      id: 1,
      name: data.name as string,
      description: data.description as string,
      startDate: new Date(data.startDate as string),
      endDate: new Date(data.endDate as string),
      state: data.state as Task['state'],
      dependency: data.dependency ? Number(data.dependency) : undefined,
      duration: '0'
    })

    setTaskManage('default')
    form.reset()
  }

  return (
    <form
      className={styles.taskForm}
      onSubmit={handleSubmit}
    >
      <p className='text-lg mb-3'>Crea o edita una tarea</p>
      <input
        type='text'
        name='name'
        placeholder='* Ingresa un nombre a la tarea'
        defaultValue={actualTask?.name}
      />
      <input
        type='text'
        name='description'
        placeholder='Ingresa una descripción'
        defaultValue={actualTask?.description}
      />

      <input
        type='text'
        name='state'
        placeholder='Ingresa un estado'
        defaultValue={actualTask?.state}
      />

      <div className='flex gap-4'>
        <input
          type='date'
          name='startDate'
          placeholder='* Ingresa una fecha de inicio'
          className='flex-1'
          defaultValue={actualTask?.startDate.toString().split('T')[0]}
        />
        <input
          type='date'
          name='endDate'
          placeholder='* Ingresa una fecha de fin'
          className='flex-1'
          defaultValue={actualTask?.endDate.toString().split('T')[0]}
        />
      </div>

      <input
        type='number'
        name='dependency'
        placeholder='Depende de:'
        defaultValue={actualTask?.dependency}
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
          onClick={cancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}
