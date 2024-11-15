import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json(
    {
      "id": "1",
      "name": 'Task 1',
      "description": 'Task 1 description',
      "startDate": new Date(),
      "endDate": new Date(),
      "duration": 1,
      "dependency": '1',
      "state": 'normal'
    },
    // {
    //   "id": "2",
    //   "name": 'Task 2',
    //   "description": 'Task 2 description',
    //   "startDate": new Date(),
    //   "endDate": new Date(),
    //   "duration": 2,
    //   "dependency": '1',
    //   "state": 'completed'
    // }
  )
}