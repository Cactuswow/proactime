import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET() {
  const { rows } = await sql`select
  user_id as id,
  concat (user_first_name,' ', user_first_last_name) as name,
  user_email as email,
  user_type as role,
  user_password as password,
  user_profile_picture as image
  from path_users`

  return NextResponse.json(rows)
}
