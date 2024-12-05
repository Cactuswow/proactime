import taskStyles from '../../../components/task/styles.module.css'
import styles from './styles.module.css'

export function CriticalPathPercent() {
  return (
    <div className={styles.percentBar}>
      <div className={`${taskStyles.container} ${styles.progress}`}>
        <p>Ruta critica</p>
        <span className={`${styles.triangle}`} />
      </div>

      <p className={`${taskStyles.container} text-right`}>83%</p>
    </div>
  )
}
