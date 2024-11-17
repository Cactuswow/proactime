import { create } from 'zustand'
import type { CriticalPathService } from './interfaces'

export const criticalPathService = create<CriticalPathService>(set => ({
  tasks: [],
  inLineTasks: [],
  fetchTasks: async () => {
    const response = await fetch('/api/tasks')
    const tasks = await response.json()
    set({ tasks })
  },
  addTask: async task => {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const newTask = await response.json()
    set(state => ({ tasks: [...state.tasks, newTask] }))
  },
  deleteTask: async id => {
    await fetch(`/api/tasks/${id}`, {
      method: 'DELETE'
    })
    set(state => ({ tasks: state.tasks.filter(task => task.id !== id) }))
  },
  updateTask: async task => {
    const response = await fetch(`/api/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const updatedTask = await response.json()
    set(state => ({
      tasks: state.tasks.map(t => (t.id === updatedTask.id ? updatedTask : t))
    }))
  }
}))
