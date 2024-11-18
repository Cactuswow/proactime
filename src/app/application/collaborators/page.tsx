import { CollaboratorsList } from './components/collaborators-list/collaboratorsList'
import { CollaboratorSearch } from './components/collaborators-search/collaboratorSearch'

export default function Page() {
  return (
    <div className='flex justify-center p-7'>
      <section className='flex flex-col gap-3 p-2 max-w-7xl w-full'>
        <CollaboratorSearch />

        <p>Lista de colaboradores</p>
        <CollaboratorsList />
      </section>
    </div>
  )
}
