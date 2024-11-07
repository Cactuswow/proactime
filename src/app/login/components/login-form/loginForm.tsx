'use client'
import type { FormEvent } from 'react'
import loginStyles from '../../styles.module.css'
import { mockUsers } from './constants'
import styles from './styles.module.css'

export function LoginForm() {
  const figureStyles = `${loginStyles.figure} ${styles.figure}`

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    const user = mockUsers.find(
      (user) => user.email === email && user.password === password
    )

    console.log(user)
  }

  return (
    <div className={styles.loginForm}>
      <h2 className='text-3xl'>Inicia sesión</h2>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
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
        <button type='submit'>Iniciar sesión</button>
      </form>

      <span className={figureStyles} />
      <span className={figureStyles} />
      <span className={figureStyles} />
    </div>
  )
}
