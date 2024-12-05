import { create } from 'zustand'
import type { AdminServiceHook } from './interfaces'

export const useAdminService = create<AdminServiceHook>((set) => ({
  taskManage: 'default',
  setTaskManage: (taskManage) => set({ taskManage }),
  actualTask: null,
  setTask: (task) => set({ actualTask: task })
}))
