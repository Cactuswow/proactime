import styles from './styles.module.css'

export function LoginForm() {
  return (
    <div className={styles.loginForm}>
      <h2 className='text-3xl'>Inicia sesión</h2>
      <form className={styles.form}>
        <input
          type='email'
          name='email'
          placeholder='Ingresa tu email'
        />

        <input
          type='password'
          name='password'
          placeholder='Ingresa tu contraseña'
        />
        <p>¿Olvidaste tu contraseña?</p>

        <button>Iniciar sesión</button>
      </form>
    </div>
  )
}
