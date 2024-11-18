import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function POST(req: Request) {
  const body = await req.json()
  const { email, password } = body
  const {rows} = await sql`select 
  user_id as id,
  concat (user_first_name,' ', user_first_last_name) as name,
  user_email as email,
  user_type_rol as role,
  user_password as password,
  user_profile_picture as image
  from users
  where user_email = ${email} and user_password = ${password}`

  return NextResponse.json(rows[0])
}

