import { NextResponse } from 'next/server'
import { mockUsers } from '../users/constants'

export async function POST(req: Request) {
  const body = await req.json()
  const { email, password } = body
  const user = mockUsers.find(
    user => user.email === email && user.password === password
  )

  return NextResponse.json(user)
}
