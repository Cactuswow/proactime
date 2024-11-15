import { CollaboratorView } from './components/collaboratorView'

export default function Page() {
  return (
    <section className='flex flex-col gap-2 p-2'>
      <p>Lista de colaboradores</p>
      <CollaboratorView />
    </section>
  )
}
