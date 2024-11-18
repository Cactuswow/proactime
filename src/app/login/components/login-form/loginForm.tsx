'use client'

import { useRouter } from 'next/navigation'
import type { FormEvent } from 'react'
import { useUserService } from '../../services/user-service/userServiceHook'
import loginStyles from '../../styles.module.css'
import styles from './styles.module.css'

export function LoginForm() {
  const router = useRouter()
  const { login } = useUserService()
  const figureStyles = `${loginStyles.figure} ${styles.figure}`

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (await login(email, password)) {
      return router.push('/application/critical-path')
    }
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
