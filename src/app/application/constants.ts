import type { Task } from './components/task/interfaces'

export const mockTasks: Task[] = [
  {
    id: '1',
    name: 'Task 1',
    description: 'Task 1 description',
    startDate: new Date(),
    endDate: new Date(),
    duration: 1,
    state: 'completed',
    tasks: [
      {
        id: '4',
        name: 'Task 1.1',
        description: 'Task 1.1 description',
        startDate: new Date(),
        endDate: new Date(),
        duration: 1,
        state: 'completed'
      },
      {
        id: '5',
        name: 'Task 1.2',
        description: 'Task 1.2 description',
        startDate: new Date(),
        endDate: new Date(),
        duration: 1,
        state: 'completed'
      }
    ]
  },
  {
    id: '2',
    name: 'Task 2',
    description: 'Task 2 description',
    startDate: new Date(),
    endDate: new Date(),
    duration: 2,
    state: 'completed',
    tasks: [
      {
        id: '6',
        name: 'Task 2.1',
        description: 'Task 2.1 description',
        startDate: new Date(),
        endDate: new Date(),
        duration: 1,
        state: 'warning'
      },
      {
        id: '7',
        name: 'Task 2.2',
        description: 'Task 2.2 description',
        startDate: new Date(),
        endDate: new Date(),
        duration: 1,
        state: 'critical',
        tasks: [
          {
            id: '8',
            name: 'Task 2.2.1',
            description: 'Task 2.2.1 description',
            startDate: new Date(),
            endDate: new Date(),
            duration: 1,
            state: 'critical'
          }
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Task 3',
    description: 'Task 3 description',
    startDate: new Date(),
    endDate: new Date(),
    duration: 3,
    state: 'normal'
  }
]
