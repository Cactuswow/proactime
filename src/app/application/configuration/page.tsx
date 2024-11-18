import { ApplicationAdminView } from "./components/application-admin-view/applicationAdminView";
import { ApplicationView } from "./components/application-view/applicationView";

export default function Page() {
  return (
    <div className='flex justify-center p-10'>
      <section className='flex flex-col gap-3  w-full max-w-6xl'>
        <p>Configuraciones</p>
        <div className='bg-[var(--white-100)] p-3 rounded-sm'>Configuracion 1</div>
        <p>Listas de aplicaciones</p>
        <ApplicationView/>
        <ApplicationAdminView/>
      </section>
    </div>
  )
}
