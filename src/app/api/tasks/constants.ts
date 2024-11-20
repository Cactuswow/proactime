import type { Task } from '@/app/application/components/task/interfaces'
import type { RawTask } from './interfaces'

export function parseTask(rawTasks: RawTask[]): Task[] {
  const tasks: Task[] = []
  const tasksMap: Map<string, Task> = new Map()

  for (const rawTask of rawTasks) {
    const task: Task = {
      id: String(rawTask.id),
      name: rawTask.name,
      description: rawTask.description,
      startDate: new Date(rawTask.startDate),
      endDate: new Date(rawTask.endDate),
      duration: Number(rawTask.duration),
      state: rawTask.state,
      tasks: []
    }

    tasksMap.set(task.id, task)
    if (!rawTask.dependency) {
      tasks.push(task)
      continue
    }

    const dependency = tasksMap.get(String(rawTask.dependency))
    if (dependency) {
      dependency.tasks?.push(task)
    }
  }

  return tasks
}
