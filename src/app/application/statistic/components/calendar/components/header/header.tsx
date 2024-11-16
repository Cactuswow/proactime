import { days } from '../../constants'
import styles from '../../styles.module.css'

export function Header() {
  return (
    <thead>
      <tr className='flex gap-2'>
        {days.map(day => (
          <th
            className={`${styles.cell} ${styles.headerCell}`}
            key={day}
          >
            {day.substring(0, 2).toLocaleUpperCase()}
          </th>
        ))}
      </tr>
    </thead>
  )
}
