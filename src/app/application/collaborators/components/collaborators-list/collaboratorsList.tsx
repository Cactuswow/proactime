'use client'

import { useUserService } from '@/app/login/services/user-service/userServiceHook'
import { CollaboratorView } from '../collaborators-view/collaboratorView'

export function CollaboratorsList() {
  const { users } = useUserService()

  return users.map(user => (
    <CollaboratorView
      key={user.id}
      user={user}
    />
  ))
}
