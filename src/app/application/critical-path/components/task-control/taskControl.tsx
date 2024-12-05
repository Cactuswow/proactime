'use client'
import Pencil from '@/../public/pencil.svg'
import Plus from '@/../public/plus.svg'
import Trash from '@/../public/trash-x.svg'
import { useAdminService } from '@/app/application/services/admin-service/adminServiceHook'
import { useUserService } from '@/app/login/services/user-service/userServiceHook'
import styles from './styles.module.css'

export function TaskControl() {
  const { user } = useUserService()
  const { setTaskManage, taskManage, actualTask, setTask } = useAdminService()
  if (user.role === 'user') {
    return null
  }

  function addTask() {
    if (taskManage === 'create') {
      return setTaskManage('default')
    }

    setTaskManage('create')
    setTask(null)
  }

  function selectTask() {
    if (taskManage === 'select') {
      return setTaskManage('default')
    }

    setTaskManage('select')
  }

  function deleteTask() {
    if (taskManage === 'delete') {
      setTaskManage('default')
      if (!actualTask) {
        return
      }
    }

    setTaskManage('delete')
  }

  return (
    <div className={styles.control}>
      <button
        type='button'
        onClick={addTask}
      >
        <Plus />
      </button>
      <button
        type='button'
        onClick={selectTask}
      >
        <Pencil />
      </button>
      <button
        type='button'
        onClick={deleteTask}
      >
        <Trash />
      </button>
    </div>
  )
}
