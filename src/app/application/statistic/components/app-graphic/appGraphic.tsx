import { applications } from '../../constants'
import styles from './styles.module.css'

export function AppGraphic() {
  return (
    <section className='flex flex-col gap-4'>
      <p>Tiempo de hoy</p>

      <div className='border-l-4 flex flex-col gap-2 p-2'>
        {applications.map(app => (
          <div
            className={`${styles.appGraphic} ${!app.permitted && styles.restricted}`}
            key={app.id}
          >
            <p>{app.name}</p>
            <p>({app.time})</p>
          </div>
        ))}
      </div>
    </section>
  )
}
