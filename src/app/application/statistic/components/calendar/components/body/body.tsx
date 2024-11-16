import { drawCalendar } from '../../constants'
import styles from '../../styles.module.css'

export function Body() {
  const calendar = drawCalendar()

  return (
    <tbody className='flex flex-col gap-2'>
      {calendar.map(week => (
        <tr
          key={`${week[0].date.getDate()} week`}
          className='flex gap-2'
        >
          {week.map(day => {
            const isCurrentMonth = !day.isCurrentMonth && styles.notCurrentMonth

            return (
              <td
                key={day.date.getDate()}
                className={`${styles.cell} ${isCurrentMonth}`}
              >
                {day.number}
              </td>
            )
          })}
        </tr>
      ))}
    </tbody>
  )
}
