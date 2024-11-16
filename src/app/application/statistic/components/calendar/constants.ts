import type { CalendarDay } from './interfaces'

export const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
]

export const days = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado'
]

export function drawCalendar() {
  const { daysInMonth, daysInPrevMonth, firstDayOfMonth, today } =
    monthCalendar()

  const calendar: CalendarDay[][] = []
  const weeksInMonth = Math.ceil((firstDayOfMonth + daysInMonth) / 7)
  let date = 1

  for (let row = 0; row < weeksInMonth; row++) {
    const week: CalendarDay[] = []

    for (let col = 0; col < 7; col++) {
      if (row === 0 && col < firstDayOfMonth) {
        const prevMonthDay = daysInPrevMonth - firstDayOfMonth + col + 2
        week.push({
          number: prevMonthDay,
          isCurrentMonth: false,
          isToday: false,
          date: new Date(
            today.getFullYear(),
            today.getMonth() - 1,
            prevMonthDay
          )
        })
      } else if (date > daysInMonth) {
        const nextMonthDay = date - daysInMonth
        const nextMonth = today.getMonth() + 1

        if (nextMonth > 11) {
          week.push({
            number: nextMonthDay,
            isCurrentMonth: false,
            isToday: false,
            date: new Date(today.getFullYear() + 1, 0, nextMonthDay)
          })

          date++
          continue
        }

        week.push({
          number: nextMonthDay,
          isCurrentMonth: false,
          isToday: false,
          date: new Date(today.getFullYear(), nextMonth, nextMonthDay)
        })

        date++
      } else {
        week.push({
          number: date,
          isCurrentMonth: true,
          isToday: date === today.getDay(),
          date: new Date(today.getFullYear(), today.getMonth(), date)
        })

        date++
      }
    }

    calendar.push(week)
  }

  return calendar
}

function monthCalendar() {
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const daysInPrevMonth = new Date(currentYear, currentMonth - 1, 0).getDate()

  return {
    firstDayOfMonth,
    daysInMonth,
    daysInPrevMonth,
    today
  }
}
