export interface AdminServiceHook {
  taskManage: 'default' | 'edit' | 'delete'
  setTaskManage: (taskManage: 'default' | 'edit' | 'delete') => void
}
