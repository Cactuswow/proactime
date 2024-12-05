import { create } from 'zustand'
import { addTask, deleteTask, fetchTask, updateTask } from './constants'
import type { CriticalPathService } from './interfaces'

export const useCriticalPathService = create<CriticalPathService>(
  (set, get) => ({
    tasks: [],
    fetchTasks: async () => {
      const tasks = await fetchTask()
      set({ tasks })
    },
    addTask: async task => {
      try {
        await addTask(task)
        const { fetchTasks } = get()
        await fetchTasks()
        return true
      } catch {
        return false
      }
    },
    deleteTask: async id => {
      await deleteTask(id)
      const { fetchTasks } = get()
      await fetchTasks()
    },
    updateTask: async task => {
      try {
        await updateTask(task)
        const { fetchTasks } = get()
        await fetchTasks()
        return true
      } catch {
        return false
      }
    }
  })
)
