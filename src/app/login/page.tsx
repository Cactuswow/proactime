import { LoginForm } from './components/login-form/loginForm'
import { ProactimeDesign } from './components/proactime-design/proactimeDesign'

export default function Page() {
  return (
    <main className='flex h-screen'>
      <ProactimeDesign />
      <LoginForm />
    </main>
  )
}
