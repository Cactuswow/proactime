import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    "id": "1",
    "name": "Lavar",
    "description": "platos",
    "startDate": "01/10/2022 13:05:10",
    "endDate": "01/10/2022 13:05:10",
    duration: 12,
    dependency: 2,
    state: 'warning' 
  })
}