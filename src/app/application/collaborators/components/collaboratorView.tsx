export function CollaboratorView() {
  return (
    <div className='flex bg-[var(--white-100)] gap-4  p-2 rounded-sm'>
      <img
        src='https://i.pinimg.com/236x/53/c5/8b/53c58be968dd9c29d59a7d430537bad1.jpg'
        alt=''
        className='h-12 w-12 rounded-full object-cover'
      />

      <div className='flex flex-col gap-1'>
        <p>Colaborador 1</p>
        <p className='text-[--jordy-blue-400]'>rol</p>
      </div>
    </div>
  )
}
