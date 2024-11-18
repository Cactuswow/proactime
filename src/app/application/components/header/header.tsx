'use client'
import { useUserService } from '@/app/login/services/user-service/userServiceHook'
import { HeaderLinks } from './components/header-links/headerLinks'
import styles from './styles.module.css'

export function Header() {
  const { user } = useUserService()

  return (
    <div>
      <header className={styles.header}>
        <HeaderLinks />
        <div className='flex justify-end flex-1 items-center gap-4'>
          <p className='text-[var(--azure-radiance-400)]'>{user.name}</p>
          <span className='w-11 h-11 rounded-full overflow-hidden border-2 border-[var(--azure-radiance-400)]'>
            <img
              src={user.image}
              alt={user.name}
              className='w-full h-full object-cover'
            />
          </span>
        </div>
      </header>

      <div className={styles.linkBar} />
    </div>
  )
}
