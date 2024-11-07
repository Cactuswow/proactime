import { HeaderLinks } from './components/header-links/headerLinks'
import styles from './styles.module.css'

export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <HeaderLinks />
        <div className='flex justify-end flex-1'>
          <span className='w-10 h-10 bg-blue-300 rounded-full' />
        </div>
      </header>

      <div className={styles.linkBar} />
    </div>
  )
}
