'use client'

import { useUserService } from '@/app/login/services/user-service/userServiceHook'
import styles from '../../styles.module.css'
import { CollaboratorsDelete } from '../collaborators-delete/collaboratorsDelete'
import { CollaboratorView } from '../collaborators-view/collaboratorView'

export function CollaboratorsList() {
  const { users, user } = useUserService()

  const Collaborator =
    user.role === 'admin' ? CollaboratorsDelete : CollaboratorView

  return users.map(user => (
    <div
      key={user.id}
      className={styles.collaborator}
    >
      <Collaborator user={user} />
    </div>
  ))
}
