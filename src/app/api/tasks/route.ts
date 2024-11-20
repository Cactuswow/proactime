import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'
import { parseTask } from './constants'
import type { RawTask } from './interfaces'

export async function GET() {
  const { rows } = await sql`select
  task_id as id,
  task_name as name,
  task_description as description,
  task_start_date as startDate,
  task_end_date as endDate,
  task_duration as duration,
  task_state as state,
  task_dependency as dependency
  from tasks
  order by
  task_dependency is not null,
  task_dependency
  `

  const tasks = parseTask(rows as RawTask[])
  return NextResponse.json(tasks)
}
// export async function POST(request: Request) {
//   const body = await request.json()
//   mockTasks.push(body)
//   return NextResponse.json(body)
// }

// export async function PUT(request: Request) {
//   const body = await request.json()
//   const index = mockTasks.findIndex(task => task.id === body.id)
//   mockTasks[index] = body
//   return NextResponse.json(body)
// }

// export async function DELETE(request: Request) {
//   const body = await request.json()
//   const index = mockTasks.findIndex(task => task.id === body.id)
//   mockTasks.splice(index, 1)
//   return NextResponse.json(body)
// }
