import { create } from 'zustand'
import { addTask, deleteTask, fetchTask, updateTask } from './constants'
import type { CriticalPathService } from './interfaces'

export const useCriticalPathService = create<CriticalPathService>(set => ({
  tasks: [],
  fetchTasks: async () => {
    const tasks = await fetchTask()
    set({ tasks })
  },
  addTask: async task => {
    const newTask = await addTask(task)
    set(state => ({ tasks: [...state.tasks, newTask] }))
  },
  deleteTask: async id => {
    await deleteTask(id)
    set(state => ({ tasks: state.tasks.filter(task => task.id !== id) }))
  },
  updateTask: async task => {
    const updatedTask = await updateTask(task)
    set(state => ({
      tasks: state.tasks.map(t => (t.id === updatedTask.id ? updatedTask : t))
    }))
  }
}))
