import type { Task } from '@/app/application/components/task/interfaces'
import { NextResponse } from 'next/server'

const mockTasks: Task[] = [
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

export function GET() {
  return NextResponse.json(mockTasks)
}

export async function POST(request: Request) {
  const body = await request.json()
  mockTasks.push(body)
  return NextResponse.json(body)
}

export async function PUT(request: Request) {
  const body = await request.json()
  const index = mockTasks.findIndex(task => task.id === body.id)
  mockTasks[index] = body
  return NextResponse.json(body)
}

export async function DELETE(request: Request) {
  const body = await request.json()
  const index = mockTasks.findIndex(task => task.id === body.id)
  mockTasks.splice(index, 1)
  return NextResponse.json(body)
}
