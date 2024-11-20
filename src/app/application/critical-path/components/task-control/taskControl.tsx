'use client'
import Pencil from '@/../public/pencil.svg'
import Plus from '@/../public/plus.svg'
import Trash from '@/../public/trash-x.svg'
import { useUserService } from '@/app/login/services/user-service/userServiceHook'
import styles from './styles.module.css'

export function TaskControl() {
  const { user } = useUserService()
  if (user.role === 'user') {
    return null
  }

  return (
    <div className={styles.control}>
      <button type='button'>
        <Plus />
      </button>
      <button type='button'>
        <Pencil />
      </button>
      <button type='button'>
        <Trash />
      </button>
    </div>
  )
}
