'use client'
import { useAdminService } from '@/app/application/services/admin-service/adminServiceHook'
import { useCriticalPathService } from '@/app/application/services/critical-path-service/criticalPathServiceHook'
import sweetAlert from 'sweetalert2'
import type { Task } from '../../interfaces'
import { TaskView } from '../../task'

interface Props {
  task: Task
}
export function TaskAdmin({ task }: Props) {
  const { taskManage, setTask, setTaskManage } = useAdminService()
  const { deleteTask } = useCriticalPathService()

  async function handleTask() {
    if (taskManage === 'select') {
      setTask(task)
      console.log(task)
      setTaskManage('edit')
    }

    if (taskManage === 'delete') {
      if (task.tasks && task.tasks.length > 0) {
        setTaskManage('default')
        return sweetAlert.fire({
          title: 'No se puede eliminar una tarea con subtareas',
          icon: 'error'
        })
      }

      const { isConfirmed } = await sweetAlert.fire({
        title: '¿Estás seguro?',
        text: 'No podrás revertir esto',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      })

      if (!isConfirmed) {
        setTaskManage('default')
        return
      }

      sweetAlert.fire({
        title: 'Eliminado',
        text: 'La tarea ha sido eliminada',
        icon: 'success'
      })

      deleteTask(task.id)
    }
  }

  return (
    <div onClick={handleTask}>
      <TaskView task={task} />
    </div>
  )
}
