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

export async function POST(request: Request) {
  const body = await request.json()

  const { rows } = await sql`insert into tasks (
    task_name,
    task_description,
    task_start_date,
    task_end_date,
    task_state,
    task_dependency
  ) values (
    ${body.name},
    ${body.description},
    ${body.startDate},
    ${body.endDate},
    ${body.state},
    ${body.dependency}
  ) returning *`

  return NextResponse.json(rows)
}

export async function PUT(request: Request) {
  const body = await request.json()

  const { rows } = await sql`update tasks set
  task_name = ${body.name},
  task_description = ${body.description},
  task_start_date = ${body.startDate},
  task_end_date = ${body.endDate},
  task_state = ${body.state},
  task_dependency = ${body.dependency}
  where task_id = ${body.id}
  returning *`

  return NextResponse.json(rows)
}

export async function DELETE(request: Request) {
  const body = await request.json()

  const { rows } =
    await sql`select task_dependency from tasks where task_id = ${body.id}`

  return NextResponse.json(rows)
}
