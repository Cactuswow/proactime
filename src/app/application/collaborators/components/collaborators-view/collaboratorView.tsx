import type { User } from '@/app/login/components/login-form/interfaces'

interface Props {
  user: User
}

export function CollaboratorView({ user }: Props) {
  return (
    <div className='flex bg-[var(--white-100)] gap-4 p-2 rounded-sm'>
      <img
        src={user.image}
        alt=''
        className='h-12 w-12 rounded-full object-cover'
      />

      <div className='flex flex-col gap-1'>
        <p>{user.name}</p>
        <p className='text-[--jordy-blue-400]'>{user.role}</p>
      </div>
    </div>
  )
}
