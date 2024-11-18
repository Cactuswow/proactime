import type { Task } from '../../components/task/interfaces'

export async function fetchTask() {
  const response = await fetch('/api/tasks')
  const tasks = await response.json()
  return tasks
}

export async function addTask(task: Task) {
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
  await fetch(`/api/tasks/${id}`, {
    method: 'DELETE'
  })
}

export async function updateTask(task: Task) {
  const response = await fetch(`/api/tasks/${task.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })

  const updatedTask = await response.json()
  return updatedTask
}
