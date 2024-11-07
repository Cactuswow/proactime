'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { headerLinks } from '../../constants'
import styles from './styles.module.css'

export function HeaderLinks() {
  const linkActive = usePathname()

  return (
    <ul className='flex gap-6'>
      {headerLinks.map(({ link, name }) => {
        const linkStyle =
          linkActive === link
            ? `${styles.link} ${styles.linkActive}`
            : styles.link

        return (
          <li
            key={link}
            className={linkStyle}
          >
            <Link href={link}>{name}</Link>
          </li>
        )
      })}
    </ul>
  )
}
