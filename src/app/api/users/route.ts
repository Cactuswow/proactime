import { NextResponse } from 'next/server'
import { mockUsers } from './constants'

export function GET() {
  return NextResponse.json(mockUsers)
}
