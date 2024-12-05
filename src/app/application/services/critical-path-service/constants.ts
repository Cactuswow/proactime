import type { RawTask } from '@/app/api/tasks/interfaces'

export async function fetchTask() {
  const response = await fetch('/api/tasks')
  const tasks = await response.json()
  return tasks
}

export async function addTask(task: RawTask) {
  const response = await fetch('/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })

  const newTask = await response.json()
  return newTask
}

export async function deleteTask(id: string) {
  await fetch('/api/tasks/', {
    method: 'DELETE',
    body: JSON.stringify({
      id
    })
  })
}

export async function updateTask(task: RawTask) {
  const response = await fetch('/api/tasks/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })

  const updatedTask = await response.json()
  return updatedTask
}
