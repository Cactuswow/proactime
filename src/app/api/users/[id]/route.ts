import { sql } from '@vercel/postgres'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id
  const { rows } = await sql`select
  user_id as id,
  concat (user_first_name,' ', user_first_last_name) as name,
  user_email as email,
  user_type as role,
  user_password as password,
  user_profile_picture as image
  from users
  where user_id = ${id}
  `

  return NextResponse.json(rows)
}

export async function POST(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id
  const { rows } =
    await sql`insert into path_users select * from users where users.user_id = ${id}
    returning *
    `

  if (rows.length === 0) {
    throw new Error('User not found')
  }

  return NextResponse.json(rows)
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id
  const { rows } = await sql`delete from path_users where user_id = ${id}`

  return NextResponse.json(rows)
}
