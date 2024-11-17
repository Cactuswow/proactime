import { mockUsers } from '@/app/login/components/login-form/constants'
import { CollaboratorsDelete } from './components/collaborators-delete/collaboratorsDelete'
import { CollaboratorSearch } from './components/collaborators-search/collaboratorSearch'
import { CollaboratorView } from './components/collaborators-view/collaboratorView'

export default function Page() {
  return (
    <div className='flex justify-center'>
      <section className='flex flex-col gap-2 p-2  max-w-7xl w-full'>
        <CollaboratorSearch />

        <p>Lista de colaboradores</p>
        <CollaboratorView user={mockUsers[0]} />
        <CollaboratorsDelete />
      </section>
    </div>
  )
}
