import loginStyles from '../../styles.module.css'
import styles from './styles.module.css'

export function ProactimeDesign() {
  const figureStyles = `${loginStyles.figure} ${styles.figure}`

  return (
    <div className={styles.proactimeDesign}>
      <article>
        <h1 className='text-5xl font-bold'>Proactime</h1>
        <p className='font-semibold'>
          Organiza el potencial de tu equipo con rutas críticas
        </p>
      </article>

      <span className={figureStyles} />
      <span className={figureStyles} />
      <span className={figureStyles} />
    </div>
  )
}
