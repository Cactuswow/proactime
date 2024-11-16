import { mockUsers } from '@/app/login/components/login-form/constants'
import { CollaboratorView } from './components/collaborators-view/collaboratorView'

export default function Page() {
  return (
    <section className='flex flex-col gap-2 p-2'>
      <p>Lista de colaboradores</p>
      <CollaboratorView user={mockUsers[0]}/>
    </section>
  )
}
