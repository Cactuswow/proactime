import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function GET() {
  const {rows} = await sql`select 
  user_id as id,
  concat (user_first_name,' ', user_first_last_name) as name,
  user_email as email,
  user_type_rol as role,
  user_password as password,
  user_profile_picture as image
  from users`

  return NextResponse.json(rows)
}
